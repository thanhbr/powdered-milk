import Container from "@/src/components/commons/Container";

const SimpleTypes = () => {
  // This is special types
  let option: any = 1;
  console.log("option", option + 1);

  let value: unknown = 1;
  // if(typeof value === "number") {
  //   console.log("value", value.toFixed());
  // }
  console.log(typeof value);

  return (
    <Container>
      <div>
        <p>There are three main primitives in JS and Typescript:</p>
        <p>boolean</p>
        <p>number</p>
        <p>string</p>
      </div>
      <div>
        <p>There are also 2 less common primitives used in later versions of JS and Typescript </p>
        <p>bigint</p>
        <p>symbol</p>
      </div>
    </Container>
  );
};

export default SimpleTypes;
