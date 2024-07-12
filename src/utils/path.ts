
function warning(cond, message) {
  if (!cond) {
      // eslint-disable-next-line no-console
      if (typeof console !== "undefined") console.warn(message);

      try {
          // Welcome to debugging history!
          //
          // This error is thrown as a convenience so you can more easily
          // find the source for a warning that appears in the console by
          // enabling "pause on exceptions" in your JavaScript debugger.
          throw new Error(message);
          // eslint-disable-next-line no-empty
      } catch (e) {}
  }
}

function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
        throw new Error(message);
    }
}

export function generatePath(originalPath, params = {}) {
  let path = originalPath;
  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
      warning(
          false,
          `Route path "${path}" will be treated as if it were ` +
              `"${path.replace(/\*$/, "/*")}" because the \`*\` character must ` +
              `always follow a \`/\` in the pattern. To get rid of this warning, ` +
              `please change the route path to "${path.replace(/\*$/, "/*")}".`,
      );
      path = path.replace(/\*$/, "/*");
  }

  // ensure `/` is added at the beginning if the path is absolute
  const prefix = path.startsWith("/") ? "/" : "";

  const segments = path
      .split(/\/+/)
      .map((segment, index, array) => {
          const isLastSegment = index === array.length - 1;

          // only apply the splat if it's the last segment
          if (isLastSegment && segment === "*") {
              const star = "*";
              const starParam = params[star];

              // Apply the splat
              return starParam;
          }

          const keyMatch = segment.match(/^:(\w+)(\??)$/);
          if (keyMatch) {
              const [ , key, optional ] = keyMatch;
              let param = params[key];

              if (optional === "?") {
                  return param == null ? "" : param;
              }

              if (param == null) {
                  invariant(false, `Missing ":${key}" param`);
              }

              return param;
          }

          // Remove any optional markers from optional static segments
          return segment.replace(/\?$/g, "");
      })
      // Remove empty segments
      .filter((segment) => !!segment);

  return prefix + segments.join("/");
}
