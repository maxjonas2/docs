import Link from "next/link";
import { HTMLAttributes } from "react";

interface LinkSection {
  groupName: string;
  items: {
    name: string;
    link: string;
  }[];
}

interface NavProps extends HTMLAttributes<HTMLElement> {
  sections: LinkSection[];
}

const Navigation: React.FC<NavProps> = ({ sections, ...rest }) => {
  return (
    <nav {...rest}>
      <h3 className="text-xl">Contents</h3>
      <div className="flow">
        {sections.map((section) => {
          return (
            <>
              <h4 className="font-bold">{section.groupName}</h4>
              <ul>
                {section.items.map((item) => (
                  <li key={item.link}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
