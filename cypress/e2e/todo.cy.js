
describe("Todo App", () => {
  beforeEach(() => {
    cy.visit("/"); 
    localStorage.clear();
  });

  it("adds a new todo", () => {
    cy.get("textarea").type("Adding a todo");
    cy.get("button").contains("Save").click();

    cy.get("li").should("have.length", 1);
    cy.get("li").should("contain.text", "Adding a todo");
  });

  it("checks a todo and updates localStorage", () => {
    // add a todo first
    cy.get("textarea").type("Check me");
    cy.get("button").contains("Save").click();

    // toggle checkbox
    cy.get('li input[type="checkbox"]').first().check().should("be.checked");

    // check localStorage directly
    cy.window().then((win) => {
      const todos = JSON.parse(win.localStorage.getItem("todos"));
      expect(todos[0].checked).to.be.true;
    });
  });

  it("persists todos after refresh", () => {
    // add todo
    cy.get("textarea").type("Persistent todo");
    cy.get("button").contains("Save").click();

    // check todo
    cy.get('li input[type="checkbox"]').first().check();

    // reload
    cy.reload();

    // todo still exists
    cy.get("li").should("contain.text", "Persistent todo");

    // checkbox still checked
    cy.get('li input[type="checkbox"]').first().should("be.checked");
  });
});
