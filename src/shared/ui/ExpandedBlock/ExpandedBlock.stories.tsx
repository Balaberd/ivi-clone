import type { Meta, StoryObj } from "@storybook/react";
import "../../../app-fsd/index.scss";
import { ExpandedBlock } from "./ExpandedBlock";

const meta: Meta<typeof ExpandedBlock> = {
  title: "UI/ExpandedBlock",
  component: ExpandedBlock,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export default meta;
type Story = StoryObj<typeof ExpandedBlock>;

export const Primary: Story = {
  args: {
    title:
      "Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие",
    content:
      "Случалось ли вам отказаться от просмотра интересного фильма из-за того, что его показывали в неудобное время? Приходилось ли искать в сети интернет, где смотреть фильмы онлайн? А спорить с домашними из-за выбора кино для просмотра по ТВ? \n Все эти проблемы остались в прошлом! Откройте для себя фильмы онлайн в HD-качестве с кинотеатром Иви. Мы не просто освобождаем вас от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего ресурса гораздо больше возможностей.",
  },
};
