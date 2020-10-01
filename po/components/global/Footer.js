'use strict';

class Footer {
        constructor() {
                this.Footer = element(by.css("#main-footer"));
                this.Services = this.Footer.element(by.css('#menu-item-192350'));
                this.Industries = this.Footer.element(by.css('#menu-item-183744'));
                this.AboutUs = this.Footer.element(by.css('#menu-item-197188'));
                this.Newsroom = this.Footer.element(by.css('#menu-item-191665'));
        };
}

module.exports = Footer;