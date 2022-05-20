import { mount } from "@cypress/react";
import Hello from "./hello";
import Home from "./index";

it("renders", () => {
  mount(<div>hello world</div>);
  cy.get("div").contains("hello world");
});

it("renders", () => {
  mount(<Home />);
  cy.get("h1").contains("Welcome to ");
  cy.get("a").contains("Next.js!");
});
