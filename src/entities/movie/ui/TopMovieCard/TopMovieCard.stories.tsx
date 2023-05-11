import type { Meta, StoryObj } from "@storybook/react";
import { ReactElement, FC } from "react";
import { TopMovieCard } from "./TopMovieCard";
import "../../../../app-fsd/index.scss";

const meta: Meta<typeof TopMovieCard> = {
  title: "entities/TopMovieCard",
  component: TopMovieCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  argTypes: {
    id: {
      type: "number",
      description: "id фильма",
    },
    title: {
      type: "string",
      description: "название фильма",
    },
    imageUrl: {
      type: "string",
      description: "url - изображения",
    },
    className: {
      type: "string",
      description: "пропс для передачи css миксинов в компонент",
    },
    ratingInTop: {
      type: "number",
      description: "позиция в топ-10",
    },
  },
};
export default meta;
type Story = StoryObj<typeof TopMovieCard>;

interface ContainerProps {
  children: ReactElement;
  width: string;
}

const Container: FC<ContainerProps> = ({ children, width }) => (
  <>
    <h1>Container element with width: {width}</h1>
    <div style={{ width, margin: "40px auto" }}>{children}</div>
  </>
);

const props = {
  id: 1,
  title: "Зимородок",
  imageUrl:
    "https://thumbs.dfs.ivi.ru/storage6/contents/e/0/08c76a2df45108ec28af6300cc5b93.jpg/304x620//?q=85",
  ratingInTop: 3,
};

export const Default: Story = {
  render: () => (
    <Container width="218px">
      <TopMovieCard {...props} />
    </Container>
  ),
};
