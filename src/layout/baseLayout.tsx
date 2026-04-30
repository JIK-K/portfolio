import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <>
      <Header></Header>

      <div className="main">{children}</div>

      <Footer></Footer>
    </>
  );
}
