// describe("Mi primer test", function () {
//   it("para ver si funciona", function () {
//     expect(true).to.equal(true);
//   });
// });

describe("Petgram", function () {
  it("para ver si la app funciona", function () {
    cy.visit("/");
  });

  it("navegamos a una categoría y vemos fotos", function () {
    cy.visit("/pet/1");
    cy.get("article");
  });

  it("si podemos navegar con la navbar a la home", function () {
    cy.visit("/pet/1");

    cy.get("nav a").first().click;
    cy.url().should("include", "/");
  });

  it("los usuarios no registrados ven el formulario de registro y de inicio de sesión al ir a favs", function () {
    cy.visit("/favs");

    cy.get("form").should("have.length", 2);
  });
});
