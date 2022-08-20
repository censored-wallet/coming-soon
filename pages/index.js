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
          Interested in integrating Red Wallets with your exchange, DApp, or
          application then pleas?
        </p>
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
