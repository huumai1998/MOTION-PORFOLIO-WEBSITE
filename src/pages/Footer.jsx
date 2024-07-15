import { Footer } from "flowbite-react";

export const FooterCom = () => {
  return (
    <div className="w-full sm:flex sm:items-center sm:justify-between">
      <Footer.Copyright by="Huu's Blog" year={new Date().getFullYear()} />
    </div>
  );
};