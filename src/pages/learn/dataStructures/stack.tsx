import { Fragment } from "react";

const StackPage = () => {
  class Stack<T> {
    private items: T[] = [];
    private capacity: number;

    constructor(capacity: number) {
      this.capacity = capacity;
    }

    public isFull(): boolean {
      return this.items.length === this.capacity;
    }

    public isEmpty(): boolean {
      return this.items.length === 0;
    }

    public push(element: T): void {
      if (this.isFull()) {
        throw new Error("Stack overflow");
      }
      this.items.push(element);
    }

    public pop(): T | undefined {
      if (this.isEmpty()) {
        throw new Error("Stack underflow");
      }
      return this.items.pop();
    }

    public peek(): T | undefined {
      return this.items[this.items.length - 1];
    }

    public size(): number {
      return this.items.length;
    }
  }

  const stack = new Stack(5);
  console.log(1, stack);

  return <Fragment>123</Fragment>;
};

export default StackPage;
