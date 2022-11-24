describe("visit site", () => {
  it("passes", () => {
    cy.visit("http://localhost:3001");
  });
});

describe("test general user flow of the home page", () => {
  it("the div clicked", () => {
    cy.get(".angry-duck-container");
  });

  it("the button clicked", () => {
    cy.get(".content-wrapper > div").click().wait(800);
  });
  it("the duck image clicked to go to the home", () => {
    cy.get(".duck-img").click().wait(800);
  });
  it("the button clicked again", () => {
    cy.get(".content-wrapper > div").click().wait(800);
  });
});

describe("test general user flow of the home page", () => {
  it("the title exist", () => {
    cy.get(".read").wait(800);
  });
  it("the title input box working", () => {
    cy.get(".title-div > textarea")
      .click()
      .type("my new post from cypress")
      .wait(800);
  });
  it("the content input box working", () => {
    cy.get(".content-div > textarea")
      .click()
      .type("my new post from cypress")
      .wait(800);
  });
  // it("the submit post button is working", () => {
  //   cy.get(".button")
  //     .click()
  // .wait(800);
  // });
  it("posts are open up when clicked", () => {
    cy.get(":nth-child(1) > .post > .post-title-btn").click().wait(800);
  });
});
// it("the comment input box working", () => {
//   cy.get('label > textarea')
// .click()
// .type("my new comment from cypress")
// .wait(800);
// });
