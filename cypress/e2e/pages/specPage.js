class SpecPages{
    elements ={
        queryBtn:()=>cy.get('#query-btn')
    }

    goPage(urlPage){
        cy.visit(urlPage);
    }

    clickBtn(){
        this.elements.queryBtn().click();
    }
}
export default new SpecPages();