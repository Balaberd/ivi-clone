import type { Meta, StoryObj } from "@storybook/react";
import { Medallion } from "./Medallion";
// добавим стилей
import "../../../../shared/styles/vars.scss";
import "./Medallion.module.scss";

const meta: Meta<typeof Medallion> = {
  title: "UI/Medallion",
  component: Medallion,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
  },

  argTypes: {
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

export const Actor: Story = {
  args: {
    name: "Скарлет Йохансон",
    photoUrl:
      "https://thumbs.dfs.ivi.ru/storage8/contents/1/7/b6c74d3f19404a112a4e9165297096.jpg/120x144/?q=85",
  },
};
