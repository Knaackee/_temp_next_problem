import { Html, Head, Main, NextScript } from "next/document";
import { useState } from "react";

const Navbar = () => {
  const [i, setI] = useState(0);
  return (
    <button
      onClick={() => {
        setI(i + 1);
        console.log("hello");
        alert("hello");
      }}
    >
      Huhu, oh boy. {i}
    </button>
  );
};

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
