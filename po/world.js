'use strict';

const HomePage = require('./pages/HomePage');
const ContactUsPage = require('./pages/ContactUsPage');
const BigDataSolutionsPage = require('./pages/BigDataSolutionsPage');

class World {
	constructor (){
		this.HomePage = new HomePage();
		this.ContactUsPage = new ContactUsPage();
		this.BigDataSolutionsPage = new BigDataSolutionsPage();
	}
}

module.exports = new World();