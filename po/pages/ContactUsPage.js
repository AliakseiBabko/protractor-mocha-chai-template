'use strict';

const BasePage = require("./BasePage");

class ContactUsPage extends BasePage {
    constructor (){
        super();
        this.ContactsBlock = element(by.css('.et_pb_section_0'));
        this.ContactsBlockPhoneNumber = this.ContactsBlock.element(by.css('.full-slim__left__content__title--secondary'));
        
        this.ContactFormBlock = element(by.css('.et_pb_section_1'));
        this.ContactFormBlockFirstName = element(by.css("[name='first_name']"));
        this.ContactFormBlockLastName = element(by.css("[name='last_name']"));
        this.ContactFormBlockEmail = element(by.css("[name='email']"));
        this.ContactFormBlockPhone = element(by.css("[name='phone']"));
        this.ContactFormBlockDropdown = element(by.css("[name='subject\[\]']"));
        this.ContactFormBlockDropdownItems = this.ContactFormBlockDropdown.$$("select[name='subject[]'] > option");
        this.ContactFormBlockComments = element(by.css("[name='Description_Primary__c']"));
        this.ContactFormBlockConfirmationCheckbox = element(by.css("[name='Check-this-box-to-confirm-you-have-read']"));
        this.ContactFormBlockRecaptchaCheckbox = element(by.css("#recaptcha-anchor"));
        this.ContactFormBlockSubmitButton = element(by.css("[value='Submit']"));

        this.LocationsBlock = element(by.css('#locations'));
    }
}

module.exports = ContactUsPage;