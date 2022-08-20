import Head from "next/head";
import Link from "next/link";

import Footer from "@components/Footer";

export default function Success() {
  return (
    <div className="container">
      <Head>
        <title>Thank you for submission!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Submission Received!</h1>
        <p>
          Thank you for writing to us! We shall review your mail and get back to
          you as earlier possible.{" "}
        </p>

        <p>
          For urgent matter please write to censor@redwallet.in or
          support@redwallet.in{" "}
        </p>
      </main>

      <Footer />
    </div>
  );
}
