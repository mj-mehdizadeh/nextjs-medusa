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
        if (!section || !sections[section._]) {
          return (
            <div key={`invalid:${name}`}>
              <p>Invalid Component: {name}</p>
            </div>
          );
        }

        if (name === "main" && children) return <div key={name}>{children}</div>

        const SectionComponent = sections[section._];

        return (
          <SectionComponent
            key={name}
            {...section}
          />
        );
      })}
      {/*<Spotlight sections={template.sections} />*/}
    </>
  );
}
