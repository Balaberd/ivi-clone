import { render, screen } from "@testing-library/react";
import { Person } from "./Person";

describe("Тестирование компонента Person", () => {
  test("Имя и роль персоны отображаются, если прокинуты name и role", () => {
    render(
      <Person
        photoUrl={
          "https://thumbs.dfs.ivi.ru/storage8/contents/1/7/b6c74d3f19404a112a4e9165297096.jpg/120x144/?q=85"
        }
        name={"Вигго Мортенсен"}
        role={"Актёр"}
      />
    );

    const name = screen.getByText(/Вигго Мортенсен/i);
    const role = screen.getByText(/Актёр/i);

    expect(name).toBeInTheDocument;
    expect(role).toBeInTheDocument;
  });

  test("Фотография отображается, если прокинут url", () => {
    render(
      <Person
        photoUrl={
          "https://thumbs.dfs.ivi.ru/storage8/contents/1/7/b6c74d3f19404a112a4e9165297096.jpg/120x144/?q=85"
        }
        name={"Вигго Мортенсен"}
        role={"Актёр"}
      />
    );

    const photo = screen.getByAltText(/Фото актёра/i);

    expect(photo).toBeInTheDocument;
  });
});
