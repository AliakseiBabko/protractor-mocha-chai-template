'use strict';

class Header{
	constructor (){
        this.Header = element(by.css("#main-header"));

        this.HeaderLogo = this.Header.element(by.css('.logo-image'));
        this.ServicesButton = this.Header.element(by.css('#menu-item-192350'));
        this.HowWeWorkButton = this.Header.element(by.css('#menu-item-196509'));
        this.IndustriesButton = this.Header.element(by.css('#menu-item-183744'));
        this.AboutUsButton = this.Header.element(by.css('#menu-item-197188'));
        this.NewsroomButton = this.Header.element(by.css('#menu-item-191665'));
        this.ContactUsButton = this.Header.element(by.css('#contact-h'));
        this.SearchButton = this.Header.element(by.css('#et_top_search'));
        
        
        this.SearchForm = element(by.css('#morphsearch'));
        
        this.ServicesDropdownItems = this.ServicesButton.$$('.ubermenu-target-title');
        this.IndustriesDropdownItems = this.IndustriesButton.$$('.ubermenu-target-title');
        this.AboutUsDropdownItems = this.AboutUsButton.$$('.ubermenu-target-title');
        this.NewsroomDropdownItems = this.NewsroomButton.$$('.ubermenu-target-title');
	};
}

module.exports = Header;