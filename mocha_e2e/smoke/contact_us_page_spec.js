const expect = require('chai').expect;
const parser = require('../../step_definitions/utils/poParser');
const utils = require('../../step_definitions/utils/utils');
const outline = require('../../outline/outline');
const ContactUsElements = require('../../test_date/contactUsPage.json');
const textSample = '~!@#$%^&*()_=1234567890zxcvbnmйцукенгшщзх';

describe("CONTACT US PAGE", async function() {    

    beforeEach(async function() {
        await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl + '/contact-us');
    });

    describe("CONTACT FORM TEXT FIELDS", async function() {
        outline(ContactUsElements.filter(element => Object.keys(element).some(key => key === 'TextFields')), async function (blocks) {            
            outline(blocks.TextFields, async function (elements) {
                it(`verify that special and alphanumeric characters can be entered into the text fields`, async function() {
                    const currentElement = parser.parser(`ContactUsPage > ${elements.Element}`);
                    await currentElement.sendKeys(textSample);
                    const receivedText = await currentElement.getAttribute('value');
                    return expect(receivedText).to.be.equal(textSample);
                });
            });
        });
    });

    describe("CONTACT FORM DROPDOWN FIELD", async function() {
        it(`verify that the third value in the dropdown menu is "Careers" `, async function() {
            const currentElement = element(by.css("option[value='3']"));
            //const currentElement = element.all(by.tagName('option'));
            await currentElement.click();
            const chosenItem = await currentElement.getText();
            return expect(chosenItem).to.be.equal('Careers');
        });           
    });
});