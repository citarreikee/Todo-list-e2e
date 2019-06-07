describe("todolist test",() => {
    it("add a new todo task", () => {
        cy.visit("http://localhost:8080");
        cy.wait(1000);
        cy.get('#app > div > form > input').type('吃海底捞');
        cy.get('#app > div > form > button').click();
        cy.wait(1000);


    });
    it("add a new todo task", () => {
        cy.get('#app > div > form > input').type('完成web作业');
        cy.get('#app > div > form > button').click();
        cy.wait(1000);
    });
    it("edit first todo task", () => {
        cy.get('#app > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > button:nth-child(1)').click()
        cy.get('#app > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > form > input').clear();
        cy.get('#app > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > form > input').type('吃小龙坎');
        cy.wait(1000);
        cy.get("#app > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > button:nth-child(1)").click()
        cy.wait(1000);
    });
    it("delete first todo task", () => {
        cy.get('#app > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > button.delete-btn').click()
        cy.wait(1000);
    });

    after(() => {
        cy.clearCookies();
    });
});