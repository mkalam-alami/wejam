export class GameSearchBlockPO {

    get title() {
        return cy.get("h1");
    }

    get titleField() {
        return cy.get("input[name=search]");
    }

    get eventSelect() {
        return cy.get("select[name=eventId]");
    }

    get userSelect2Dropdown() {
        return cy.get("select[name=user]");
    }

    get platformSelect() {
        return cy.get("select[name=platforms]");
    }

    get tagSelect() {
        return cy.get("select[name=tags]");
    }

    get applyButton() {
        return cy.get("input[type=submit]");
    }

    get hideReviewedCheckbox() {
        return cy.get("input[name=hideReviewed]");
    }

    get highScoreSupportCheckbox() {
        return cy.get("input[name=highScoresSupport]");
    }

    get gamesList() {
        return cy.get(".game-grid, .game-grid-3");
    }

    get gameLinks() {
        return cy.get(".entry-thumb");
    }

}

export default new GameSearchBlockPO();