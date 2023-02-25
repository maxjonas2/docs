"use client";

import ContentWrapper from "./components/ContentWrapper";
import Navigation from "./components/Navigation";
import "./globals.css";

const sections = [
  {
    groupName: "Group A",
    items: [
      { name: "About", link: "/about" },
      { name: "React Testing", link: "/react-testing" },
      { name: "Home", link: "/" },
    ],
  },
  {
    groupName: "Group B",
    items: [
      { name: "Item 4", link: "/item4" },
      { name: "Item 5", link: "/item5" },
      { name: "Item 6", link: "/item6" },
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Saofi Docs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Saofi Docs" />
      </head>
      <body className="bg-slate-200">
        <div className="app-container">
          <Navigation sections={sections} className="flow main-nav" />
          <ContentWrapper element={children} />
        </div>
      </body>
    </html>
  );
}
