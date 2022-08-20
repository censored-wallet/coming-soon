import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Red Wallet - Open Source Red Wallets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="What is Red Wallet?" />
        <hr />
        <p className="description">
          Interested in Red Wallet database access, collaboration, donation,
          monitoring requests, or partnerships, among other things? Feel free to
          communicate with us.
        </p>
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
