import "@/styles/styleguide.css";
import Layout from "../../components/Layouts/layout";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}
