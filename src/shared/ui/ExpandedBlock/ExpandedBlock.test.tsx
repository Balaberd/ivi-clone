import { screen, fireEvent, render } from "@testing-library/react";
import { ExpandedBlock } from "./ExpandedBlock";

describe("ExpandedBlock test", () => {
  it("ExpandedBlock rendered!", () => {
    render(<ExpandedBlock title="title" content="content" />);

    const element: HTMLElement = screen.getByTestId("expandedBlock");

    expect(element).toBeInTheDocument();
  });

  test("clicks toggle class 'hidden'", () => {
    render(<ExpandedBlock title="title" content="content" />);

    const button: HTMLElement = screen.getByRole("button");
    const content: HTMLElement = screen.getByTestId("content");

    expect(content).toHaveClass("hidden");
    fireEvent.click(button);
    expect(content).not.toHaveClass("hidden");
    fireEvent.click(button);
    expect(content).toHaveClass("hidden");
  });

  test("split content text to paragraphs", () => {
    const paragraphsArray = [
      "Lorem ipsum.",
      "Pellentesque felis",
      "Quisque varius.",
    ];

    const contentText = paragraphsArray.join("\n");

    render(<ExpandedBlock title="Lorem ipsum" content={contentText} />);

    const paragraphs: HTMLElement[] = screen.getAllByTestId("paragraph");

    expect(paragraphs.length).toEqual(3);
  });
});
