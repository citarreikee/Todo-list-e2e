describe("todolist test",() => {
  cy.visit("http://localhost:8080");
  cy.waitForElementVisible('body');
  cy.pause(1000);
  cy.get('#app > div > form > input').type('吃海底捞');
  cy.get('#app > div > form > button').click();
});