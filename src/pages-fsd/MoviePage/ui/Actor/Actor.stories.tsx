import type { Meta, StoryObj } from "@storybook/react";
import { Actor } from "./Actor";
import "../../../../shared/styles/vars.scss";
import "./Actor.module.scss";

const meta: Meta<typeof Actor> = {
  title: "UI/Actor",
  component: Actor,
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

type Story = StoryObj<typeof Actor>;

export const ActorMed: Story = {
  args: {
    name: "Скарлет Йохансон",
    photoUrl:
      "https://thumbs.dfs.ivi.ru/storage8/contents/1/7/b6c74d3f19404a112a4e9165297096.jpg/120x144/?q=85",
  },
};
