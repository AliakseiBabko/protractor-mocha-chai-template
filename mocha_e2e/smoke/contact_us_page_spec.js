const expect = require('chai').expect;
const EC = protractor.ExpectedConditions;
const CUSTOM_TIMEOUT = 15 * 1000;
const parser = require('../../step_definitions/utils/poParser');
const utils = require('../../step_definitions/utils/utils');
const MemoryObject = require('../../step_definitions/memory/memory');
const outline = require('../../outline/outline');
const ContactUsElements = require('../../test_date/contactUsPage.json');
const driver = require('selenium-webdriver');
const textSample = '~!@#$%^&*()_=1234567890zxcvbnmйцукенгшщзх';

describe("CONTACT US PAGE", async function() {    

    beforeEach(async function() {
        await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl + '/contact-us');
    });

    describe("CONTACT FORM TEXT FIELDS", async function() {
        it(`verify that special and alphanumeric characters can be entered into the text fields`, async function () {
            const textFieldsArray = ContactUsElements.filter(element => Object.keys(element).some(key => key === 'TextFields'));
            const listOfTextFields = textFieldsArray[0].TextFields;

            outline(listOfTextFields, async function (elements) {
                const currentElement = parser.parser(`contactUsPage > ${elements.Element}`);
                await currentElement.sendKeys(textSample);
                const receivedText = await currentElement.getAttribute('value');
                return expect(receivedText).to.be.equal(textSample);
            });
        });

        it.skip(`verify that special and alphanumeric characters can be entered into the text fields`, async function () {
            const currentElement = element(by.css("[name='first_name']"));
            await currentElement.sendKeys(textSample);
            const receivedText = await currentElement.getAttribute('value');
            return expect(receivedText).to.be.equal(textSample);
        });
    });
});