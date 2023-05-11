import { screen, fireEvent, render } from "@testing-library/react";
import { RatingLine } from "./RatingLine";

describe("RatingLine test", () => {
  test("RatingLine rendered!", () => {
    render(<RatingLine rating={8.8} />);
    const element = screen.getByTestId("custom-element");
    expect(element).toBeInTheDocument();
  });
  test("RatingLine not rendered!", () => {
    render(<RatingLine rating={18.8} maxRating={10} />);
    const element = screen.queryByTestId("custom-element");
    expect(element).not.toBeInTheDocument();
  });
});
