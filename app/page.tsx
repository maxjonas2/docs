"use client";

import { useEffect, useRef, useState } from "react";

const sectionTitles = [
  "About",
  "Skills",
  "Projects",
  "Contact",
  "Footer",
  "Header",
];

export default function Home() {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusantium eius ipsum vel laudantium dolorum aspernatur quasi odit. Libero fugit ipsa quod totam quis, dicta eaque neque deleniti eligendi deserunt recusandae incidunt hic tempora, modi, natus adipisci atque repudiandae quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusantium eius ipsum vel laudantium dolorum aspernatur quasi odit. Libero fugit ipsa quod totam quis, dicta eaque neque deleniti eligendi deserunt recusandae incidunt hic tempora, modi, natus adipisci atque repudiandae quam.";

  const [currentSection, setCurrentSection] = useState<String | null>(
    sectionTitles[0]
  );
  const sectionContainer = useRef<HTMLDivElement>(null);
  const rootMarginRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionContainer.current) return;

    function obsververCallback(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }

    const observer = new IntersectionObserver(obsververCallback);

    const titles = sectionContainer.current.querySelectorAll("h1");
    titles.forEach((title) => {
      observer.observe(title);
    });
  }, []);

  useEffect(() => {
    console.log(currentSection);
  }, [currentSection]);

  return (
    <>
      <nav className="sub-nav">
        <h2 className="font-bold">Sub-Content</h2>
        {sectionTitles.map((title) => {
          return (
            <div
              className={
                title === currentSection
                  ? "mt-2 text-md font-bold"
                  : "mt-2 text-md font-normal"
              }
            >
              <a href={`#${title}`}>{title}</a>
            </div>
          );
        })}
      </nav>
      <div
        ref={sectionContainer}
        className="main-content flow h-screen scroll-smooth overflow-y-scroll"
      >
        {sectionTitles.map((title) => {
          return (
            <section key={title} className="space-y-4">
              <h1 id={title} className="text-lg font-bold">
                {title}
              </h1>
              <p>{lorem}</p>
              <p>{lorem}</p>
              <p>{lorem}</p>
              <p>{lorem}</p>
            </section>
          );
        })}
      </div>
    </>
  );
}
