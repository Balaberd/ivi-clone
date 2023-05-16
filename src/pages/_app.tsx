import "@/app-fsd/index.scss";
import { setupStore } from "@/app-fsd/model/store";
import { Layout } from "@/pages-fsd";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

const store = setupStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
