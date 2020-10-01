'use strict';

const BasePage = require("./BasePage");

class BigDataSolutionsPage extends BasePage {
    constructor (){
        super();
        this.BigDataHeader = element(by.css('.et_pb_section_0'));
        this.BigDataSpeakWithUsButton = this.BigDataHeader.element(by.css('.anim-arrow__trigger'));
        this.BigDataArticle = element(by.css('.et_pb_section_1'));
        this.OurSolutionsHeader = element(by.css('.et_pb_section_2'));
        this.OurSolutionsArticles = element(by.css('.et_pb_section_3'));
        this.OurSolutionsConclusion = element(by.css('.et_pb_section_4'));
        this.ClientsSolutionsBlock = element(by.css('.et_pb_section_5'));
    }
}

module.exports = BigDataSolutionsPage;