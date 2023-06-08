import { Template } from "../types/template"
import React from "react"

import * as sections from "../theme/sections"

export const Assembly: React.FC<{
  template: Template;
}> = ({
  children,
  template,
}) => {
  return (
    <>
      {template?.order.map((name) => {
        const section = template.sections[name];
        if (name === "main" && children) {
          // @ts-ignore
          return <div key={name}>{children(section)}</div>
        }

        if (!section || !section._ || !sections[section._]) {
          return (
            <div key={`invalid:${name}`}>
              <p>Invalid Component: {name}</p>
            </div>
          );
        }

        const SectionComponent = sections[section._];

        // @ts-ignore
        return (<SectionComponent
            key={name}
            {...section}
          />
        );
      })}
      {/*<Spotlight sections={template.sections} />*/}
    </>
  );
}
