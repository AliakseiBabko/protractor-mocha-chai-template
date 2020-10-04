const expect = require('chai').expect;
const EC = protractor.ExpectedConditions;
const CUSTOM_TIMEOUT = 15 * 1000;
const parser = require('../../step_definitions/utils/poParser');
const utils = require('../../step_definitions/utils/utils');
const MemoryObject = require('../../step_definitions/memory/memory');
const outline = require("../../outline/outline");
const HeaderElements = require("../../test_date/header.json");
const driver = require("selenium-webdriver");

describe("HEADER", async function() {

    beforeEach(async function() {
        await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl);
    });

    describe("MENU ELEMENTS VISIBILITY", function() {
        outline(HeaderElements, function(elements) {
            it(`${elements.Element} should be visible in the Header`, async function () {
                await browser.wait(utils.ECHelper(parser.parser(`HomePage > Header > ${elements.Element}`), "visible"), CUSTOM_TIMEOUT, `${elements.Element} is not visible`);
            }); 
        });
    });    
    
    describe("SUBMENU ELEMENTS VISIBILITY ON MOUSE HOVER", async function() {
        before(function() {
            if (!HeaderElements.filter(element => Object.keys(element).some(key => key === 'DropdownItems'))) { this.skip(); }
        })

        outline(HeaderElements.filter(element => Object.keys(element).some(key => key === 'DropdownItems')), function(elements) {
            it(`verify that user can see dropdown with ${elements.DropdownItems} items when he hover his mouse over ${elements.Element} element in the Header`, async function() {                
                if (!elements.DropdownItems) {
                    this.skip();                
                } else {
                    const watchElement = elements.Element;
                    const currentElement = parser.parser(`HomePage > Header > ${elements.Element}`);
                    const dropdownElements = parser.parser(`HomePage > Header > ${elements.Dropdown}`);
                    const dropdownElementsArray = await dropdownElements.asElementFinders_();
                    const arraySize = dropdownElementsArray.length;
                    
                    await driver.actions({ bridge:true }).move({ origin:currentElement }).perform();
                    //await browser.executeScript('arguments[0].hover();', currentElement);

                    await browser.wait(utils.ECHelper(dropdownElements, 'present'), CUSTOM_TIMEOUT, `${elements.Element} is not present`);
                    return expect(arraySize, `${elements.Dropdown} size (${arraySize}) is different then given count (${elements.DropdownItems})`).to.be.equal(parseInt(`${elements.DropdownItems}`));
                }
            });
        });
    });

});