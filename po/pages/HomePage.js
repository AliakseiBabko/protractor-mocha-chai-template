'use strict';

const BasePage = require("./BasePage");

class HomePage extends BasePage{
	constructor (){
		super();

        this.DigitalSolutionsBlock = element(by.css('.et_pb_section_0'));
        this.DigitalSolutionsHeader = this.DigitalSolutionsBlock.element(by.css('.full-slim__left__content__title--primary'));
        
        this.WhatsTrendingBlock = element(by.css('.et_pb_section_1'));
        this.WhatsTrendingHeader = this.WhatsTrendingBlock.element(by.css('.et_pb_row_0'));
        this.WhatsTrendingDistributedAgile = this.WhatsTrendingBlock.element(by.css('.et_pb_column_1'));
        this.WhatsTrendingDigitalTransformation = this.WhatsTrendingBlock.element(by.css('.et_pb_column_2'));
        this.WhatsTrendingDigitalMarketingSolutions = this.WhatsTrendingBlock.element(by.css('.et_pb_column_3'));
        //this.ServiceImages = this.ServicesBlock.$$('.et_pb_blurb_content');

        this.CompaniesBlock = element(by.css('.et_pb_section_2'));
        this.CompaniesBlockHeader = element(by.css('.et_pb_row_2'));
        this.CompaniesLogos = this.CompaniesBlock.$$('img');

        this.SevicesBlock = element(by.css('.et_pb_section_3'));
        this.SevicesBlockHeader = element(by.css('.et_pb_row_4'));
        this.ServicesSoftwareEngineering = this.SevicesBlock.element(by.css('.et_pb_column_2'));
        this.ServicesDigitalTransformation = this.SevicesBlock.element(by.css('.et_pb_column_2'));

        this.InnovationCloudBlock = element(by.css('.et_pb_section_4'));
        this.InnovationCloudBlockHeader = this.InnovationCloudBlock.element(by.css('.et_pb_text_7.dash'));

        this.OurExperienceBlock = element(by.css('.et_pb_section_5'));
        this.OurExperienceBlockHeader = this.OurExperienceBlock.element(by.css('.et_pb_row_7'));        

        this.TechTipsBlockHeader = element(by.css('.et_pb_section_6'));
        this.TechTipsBlockHeaderBlockText = this.TechTipsBlockHeader.element(by.css('.et_pb_row_9'));


        this.TechTipsBlockArticles = element(by.css('.et_pb_section_7'));
        this.TechTipsBlockArticlesImg = element(by.css('.attachment-full'));
        this.TechTipsBlockLearnMoreButton = this.TechTipsBlockArticles.element(by.css('.latest-news__item-learn-more'));
        this.TechTipsBlockMoreArticlesButton = this.TechTipsBlockArticles.element(by.css('.latest-news__other-news'));

        this.ContactUsBlock = element(by.css('.et_pb_section_9'));
        this.ContactUsButton = this.ContactUsBlock.element(by.css('#contact-f'));
	};
}

module.exports = HomePage;