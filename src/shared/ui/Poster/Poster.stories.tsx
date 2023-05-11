import type { Meta, StoryObj } from "@storybook/react";
import "../../../app-fsd/index.scss";
// import { ReactElement, FC } from "react";
import { Poster } from "./Poster";

const meta: Meta<typeof Poster> = {
  title: "shared/Poster",
  component: Poster,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story:
          "Компонент имеет размер в 100% от родителя, принимает Url для фона и ReactElement для отображения контента",
      },
    },
  },
  argTypes: {
    imageUrl: {
      type: "string",
      description: "url адресс изображения",
    },
    title: {
      type: "string",
      description: "название фильма, пропс передается в аттрибут alt",
    },
    classNames: {
      type: "string",
      description: "пропс для передачи css миксинов в компонент",
    },
    children: {
      type: "function",
      description: "ReactElement",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Poster>;

const childElement = (
  <h1
    style={{
      width: "100%",
      height: "100%",
      fontSize: "36px",
      color: "white",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(24, 137, 48, 0.5)",
    }}
  >
    this is child element
  </h1>
);

const childElement1 = (
  <div style={{ width: "100%", height: "100%", backgroundColor: "gray" }}></div>
);

export const Default: Story = {
  args: {
    imageUrl:
      "https://thumbs.dfs.ivi.ru/storage6/contents/4/6/38a8b010f1a859fb3c709976fa8d1e.jpg/234x360//?q=85",
    title: "Хоббит: Пустошь Смауга",
    children: childElement1,
  },
  decorators: [
    (Aaa) => (
      <div style={{ width: "172px", height: "263px" }}>
        <Aaa />
      </div>
    ),
  ],
};

export const WidthChildElement: Story = {
  args: {
    imageUrl:
      "https://thumbs.dfs.ivi.ru/storage6/contents/4/6/38a8b010f1a859fb3c709976fa8d1e.jpg/234x360//?q=85",
    title: "Хоббит: Пустошь Смауга",
    children: childElement,
  },
  decorators: [
    (Aaa) => (
      <div style={{ width: "172px", height: "263px" }}>
        <Aaa />
      </div>
    ),
  ],
};

// const childElement = (
//   <h1
//     style={{
//       width: "100%",
//       height: "100%",
//       fontSize: "36px",
//       color: "white",
//       textAlign: "center",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       background: "rgba(24, 137, 48, 0.5)",
//     }}
//   >
//     this is child element
//   </h1>
// );

// interface ContainerProps {
//   children: ReactElement;
//   width: string;
//   height: string;
// }

// const Container: FC<ContainerProps> = ({ children, width, height }) => (
//   <>
//     <h1>
//       Container element with width: {width}, height: {height}
//     </h1>
//     <div style={{ width, height, margin: "40px auto" }}>{children}</div>
//   </>
// );

// export const Default: Story = {
//   render: () => (
//     <Container width="172px" height="263px">
//       <Poster
//         imageUrl="https://thumbs.dfs.ivi.ru/storage6/contents/4/6/38a8b010f1a859fb3c709976fa8d1e.jpg/234x360//?q=85"
//         title="Хоббит: Пустошь Смауга"
//       ></Poster>
//     </Container>
//   ),
// };

// export const WidthChildElement: Story = {
//   render: () => (
//     <Container width="286px" height="136px">
//       <Poster
//         imageUrl="https://thumbs.dfs.ivi.ru/storage8/contents/e/e/7b7bf8cc8ce24bcfc485e5028bd37a.jpg/570x272/?q=85"
//         title="Тайна пропавшей деревни"
//       >
//         {childElement}
//       </Poster>
//     </Container>
//   ),
// };
