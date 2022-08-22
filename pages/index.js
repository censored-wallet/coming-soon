import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";

export default function Home() {
  return (
    <div className="container">
      <main>
            <Head>
        <title>Red Wallet - Open Source Red Wallets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src="./red-wallet-logo.png" alt="red-wallet-logo" 
      style={{width:'100%', height:'auto', maxWidth:'180px', marginBottom: 20}}
      />
        <Header title="What is Red Wallet?" />
        <hr />
        <p className="description">
          Interested in integrating Red Wallet database to your application or
          collaboration, compliance, monitoring requests, partnerships or
          donation among other things? Feel free to communicate with us.
        </p>
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
