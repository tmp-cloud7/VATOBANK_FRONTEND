// src/component/Layout.jsx

import ScrollToTop from "./ScrollToTop";


export default function Layout({ children }) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
}
