import { screen, fireEvent, render } from "@testing-library/react";
import { Poster } from "./Poster";

describe("Poster test", () => {
  test("Poster rendered", () => {
    render(
      <Poster
        title="Постучись в мою дверь"
        imageUrl="https://thumbs.dfs.ivi.ru/storage4/contents/b/0/a2ea673aa209074f29d48ac3cf6288.jpg/234x360//?q=85"
      />
    );
    expect(screen.getByTestId("custom-element")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
