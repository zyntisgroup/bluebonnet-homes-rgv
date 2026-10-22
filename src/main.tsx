import React from "react";
import ReactDOM from "react-dom/client";
import { usePathname } from "next/navigation";
import RootLayout from "./app/layout";
import HomePage from "./app/page";
import PortfolioPage from "./app/portfolio/page";
import ProcessPage from "./app/process/page";
import AboutPage from "./app/about/page";
import ResourcesPage from "./app/resources/page";
import ContactPage from "./app/contact/page";

function AppRouter() {
  const pathname = usePathname();

  let pageContent: React.ReactNode;
  if (pathname === "/portfolio") {
    pageContent = <PortfolioPage />;
  } else if (pathname === "/process") {
    pageContent = <ProcessPage />;
  } else if (pathname === "/about") {
    pageContent = <AboutPage />;
  } else if (pathname === "/resources") {
    pageContent = <ResourcesPage />;
  } else if (pathname === "/contact") {
    pageContent = <ContactPage />;
  } else {
    pageContent = <HomePage />;
  }

  return <RootLayout>{pageContent}</RootLayout>;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
