import React from "react";
import { render } from "@testing-library/react";
import { screen, fireEvent } from "@testing-library/dom";
import { Button } from "../../src/components"
import { ButtonSize, ButtonType } from "../../src/components/button/Button";


describe("Button component", () => {
  const buttonText = "Title button";

  const noop = () => {};

  it("should render the properties", () => {
    const { container } = render(
      <Button
        disabled={true}
        type="submit"
        size="lg"
        variant="ghost"
        leadingIcon="left"
        trailingIcon="right"
        className="mt-6 pl-2"
      >
        Title button
      </Button>
    );
    const el = container.querySelector("na-button");

    expect(el?.getAttribute("disabled")).toBe("true");
    expect(el?.getAttribute("type")).toBe("submit");
    expect(el?.getAttribute("size")).toBe("lg");
    expect(el?.getAttribute("variant")).toBe("ghost");
    expect(el?.getAttribute("leadingIcon")).toBe("left");
    expect(el?.getAttribute("trailingIcon")).toBe("right");
    expect(el?.getAttribute("class")).toMatch(/mt-6/)
  })

  it("should render content", () => {
    const { baseElement } = render(
      <Button onClick={() => {}}>{buttonText}</Button>
    )

    expect(baseElement).toBeTruthy();
    expect(screen.getByText(buttonText));
  })


  describe("size", () => {
    (["default", "sm", "lg", "icon"] as const).forEach((size: ButtonSize) => {
      it(`should render ${size} size`, async () => {
        const { container } = render(
          <Button size={size} onClick={noop}>
            Button
          </Button>
        );

        const button = container.querySelector("na-button");
        expect(button).toBeTruthy();
        expect(button?.getAttribute("size")).toEqual(size);
      });
    });
  });

  describe("type", () => {
    (["default", "submit", "button"] as const).forEach(
      (type: ButtonType) => {
        it(`should render ${type} type`, async () => {
          const { container } = render(
            <Button type={type} onClick={noop}>
              Button
            </Button>
          );
          const button = container.querySelector("na-button");

          expect(button).toBeTruthy();
          expect(button?.getAttribute("type")).toEqual(type);
        });
      }
    );
  });

  it("responds to events", async () => {
    const onClick = jest.fn();
    const { container } = render(
      <Button onClick={onClick}>Button</Button>
    );
    const button = container.querySelector("na-button");
    expect(button).toBeTruthy();
    button && fireEvent(button, new CustomEvent("_click"));
    expect(onClick).toBeCalled();
  });
})

