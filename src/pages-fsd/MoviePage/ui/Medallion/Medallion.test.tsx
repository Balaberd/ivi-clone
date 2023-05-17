import { render, screen } from "@testing-library/react";
import { Medallion } from "./Medallion";

describe("Тестирование компонента Medallion", () => {
  test("Медальон отображает актера, если в него прокинули name", () => {
    render(
      <Medallion
        name="Вигго Мортенсен"
        photoUrl="https://thumbs.dfs.ivi.ru/storage8/contents/1/7/b6c74d3f19404a112a4e9165297096.jpg/120x144/?q=85"
      />
    );

    const name = screen.getByText(/Вигго Мортенсен/i);
    expect(name).toBeInTheDocument();
  });
});
