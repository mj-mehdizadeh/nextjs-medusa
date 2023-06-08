import React from "react"
import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import { Assembly } from "@modules/Assembly"
import { Section, Template } from "../../../types/template"
import { HeaderProps } from "../../../types/widgets"

const Layout: React.FC<{header: Template, footer: Template}> = ({ children, header, footer }) => {
  return (
    <div>
      <Assembly template={header}>
        {(section: Section<HeaderProps>) => <Nav {...section} />}
      </Assembly>
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
