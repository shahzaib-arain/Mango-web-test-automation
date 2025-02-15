// HomePage.js
export class HomePage {
    constructor(page) {
        this.page = page;
        this.cookieAcceptButton = page.locator('#onetrust-accept-btn-handler');
        this.searchInput = page.locator('#searchInput');
        this.searchButton = page.locator('button[type="submit"]');
        this.menuLinks = page.locator('.menu-links a');
    }

    async navigate() {
        await this.page.goto('https://shop.mango.com/us/en');
    }

    async acceptCookies() {
        if (await this.cookieAcceptButton.isVisible()) {
            await this.cookieAcceptButton.click();
        }
    }

    async searchProduct(productName) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }
}