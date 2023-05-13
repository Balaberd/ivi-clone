import type { Meta, StoryObj } from "@storybook/react";
import { Medallion } from "./Medallion";
// добавим стилей
import "../../../app-fsd/styles/vars.scss";
import "../../assets/fonts/index.scss";

const meta: Meta<typeof Medallion> = {
  title: "UI/Medallion",
  component: Medallion,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
  },

  argTypes: {
    rating: {
      type: "string",
      description: "Рейтинг фильма",
      defaultValue: "8,8",
    },
    photoUrl: {
      type: "string",
      description: "Фото актера",
      defaultValue:
        "https://thumbs.dfs.ivi.ru/storage8/contents/1/7/b6c74d3f19404a112a4e9165297096.jpg/120x144/?q=85",
    },
    name: {
      type: "string",
      description: "Имя актера",
      defaultValue: "Вигго Мортенсен",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Medallion>;

export const Rating: Story = {
  args: {
    rating: "7,6",
  },
};

export const Actor: Story = {
  args: {
    name: "Скарлет Йохансон",
    photoUrl:
      "https://thumbs.dfs.ivi.ru/storage8/contents/1/7/b6c74d3f19404a112a4e9165297096.jpg/120x144/?q=85",
  },
};
