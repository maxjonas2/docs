"use client";

import { SVGProps, useEffect, useRef, useState } from "react";

const sectionTitles = [
  "About",
  "Skills",
  "Projects",
  "Contact",
  "Footer",
  "Header",
  "Contract One",
  "Contract Two",
];

export default function Home() {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusantium eius ipsum vel laudantium dolorum aspernatur quasi odit. Libero fugit ipsa quod totam quis, dicta eaque neque deleniti eligendi deserunt recusandae incidunt hic tempora, modi, natus adipisci atque repudiandae quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusantium eius ipsum vel laudantium dolorum aspernatur quasi odit. Libero fugit ipsa quod totam quis, dicta eaque neque deleniti eligendi deserunt recusandae incidunt hic tempora, modi, natus adipisci atque repudiandae quam.";

  const [currentSection, setCurrentSection] = useState<string>(
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
      <SubNav sectionTitles={sectionTitles} currentSection={currentSection} />
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
              {[1, 2, 3, 4, 5].map((item) => (
                <p>{lorem}</p>
              ))}
            </section>
          );
        })}
      </div>
    </>
  );
}

const SubNav: React.FC<{ sectionTitles: string[]; currentSection: string }> = ({
  sectionTitles,
  currentSection,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredSections = sectionTitles.filter((title) =>
    title.toLowerCase().includes(searchValue.toLowerCase().trim())
  );

  return (
    <nav className="sub-nav">
      <h2 className="font-bold">Sub-Content</h2>
      <TextInput
        value={searchValue}
        onChange={(e) => setSearchValue((e.target as HTMLInputElement).value)}
        onButtonClick={() => setSearchValue("")}
      />
      {filteredSections.map((title) => {
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
  );
};

const TextInput: React.FC<
  { onButtonClick: Function } & React.HTMLProps<HTMLInputElement>
> = ({ onButtonClick, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-[90%] rounded-sm border border-slate-400/60 h-[2rem] relative">
      <input
        {...props}
        type="text"
        className=" indent-1 text-sm h-full w-full border-none text-black/80"
        placeholder="Pesquisar"
        maxLength={25}
        ref={inputRef}
      />
      {(props.value as string).length > 0 && (
        <button
          tabIndex={0}
          className="w-[1.2rem] h-[1.2rem] rounded-[.6rem] centered-items absolute right-1 top-[6px] bg-slate-500/50 hover:bg-slate-500/80"
          onClick={() => {
            onButtonClick();
            inputRef.current?.focus();
          }}
        >
          <DeleteIcon />
        </button>
      )}
    </div>
  );
};

// Create SVG for a delete icon
const DeleteIcon: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#fff"
      transform="scale(0.76)"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
