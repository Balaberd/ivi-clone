import type { Meta, StoryObj } from "@storybook/react";
import "../../../app-fsd/index.scss";
import { RatingLine } from "./RatingLine";

const meta: Meta<typeof RatingLine> = {
  title: "shared/RatingLine",
  component: RatingLine,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        story:
          "Компонент работает на подобии градусника, принимает пропсы rating и maxRating=10, стилизация осуществляется путем передачи миксинов",
      },
    },
  },
  argTypes: {
    rating: {
      type: "number",
      description: "рейтинг",
      //   options: [1, 3.3, 5.8, 9.7],
      //   control: {
      //     type: "radio",
      //   },
    },
    maxRating: {
      type: "number",
      description:
        "максимальный рейтинг (Дефолтное значение === 10), если rating > maxRating компонент возвращает null",
    },
    className: {
      type: "string",
      description: "пропс для передачи css миксинов в компонент",
    },
  },
};
export default meta;
type Story = StoryObj<typeof RatingLine>;

export const Default: Story = {
  args: {
    rating: 8.6,
  },
};
