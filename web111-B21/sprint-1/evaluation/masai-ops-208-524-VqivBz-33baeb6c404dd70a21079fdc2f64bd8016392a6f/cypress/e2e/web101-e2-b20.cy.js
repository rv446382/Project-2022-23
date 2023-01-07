import data from "../../submissionData.json"; // do not create this file

// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

data.forEach((ele) => {
  describe("Website Builder layout", () => {
    let url = ele.submission_link;
    let acc_score = 1;
    if (url && url.trim().length) {
      it("Checking display flex in the Banner", () => {
        cy.visit(url);
        cy.get("#banner")
          .should("have.css", "display", "flex")
          .then(() => {
            acc_score += 2;
          });
      }); // Giving a score of 2
      it("Checking the services section for display grid", () => {
        cy.visit(url);
        cy.get("#services")
          .should("have.css", "display", "grid")
          .then(() => {
            acc_score += 2;
          });
      }); // Giving a score of 2

      it("Checking the more section for display grid", () => {
        cy.visit(url);
        cy.get("#more")
          .should("have.css", "display", "grid")
          .then(() => {
            acc_score += 2;
          });
      }); // Giving a score of 2

      it("Checking for the banner in column direction in mobile devices", () => {
        cy.viewport(600, 750);
        cy.get("#banner")
          .should("have.css", "flex-direction", "column")
          .then(() => {
            acc_score += 2;
          });
      }); // Giving a score of 2
      it("Checking text-align center for the headings", () => {
        cy.get("#container>h1").should("have.css", "text-align", "center");
        cy.get("#container>h2").should("have.css", "text-align", "center");
        cy.get("#container>p").should("have.css", "text-align", "center");
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1
    }
    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id: ele.id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  });
});
