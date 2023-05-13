import type { Meta, StoryObj } from "@storybook/react";
import { Person } from "./Person";
// добавим стилей
import "../../../app-fsd/styles/vars.scss";
import "../../assets/fonts/index.scss";

const meta: Meta<typeof Person> = {
  title: "UI/Person",
  component: Person,
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
    role: {
      type: "string",
      description: "Роль персоны",
      defaultValue: "Актер",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Person>;

export const Actor: Story = {
  args: {
    name: "Вигго Мортенсен",
    photoUrl:
      "https://thumbs.dfs.ivi.ru/storage8/contents/1/7/b6c74d3f19404a112a4e9165297096.jpg/120x144/?q=85",
    role: "Актер",
  },
};
