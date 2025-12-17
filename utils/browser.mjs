import puppeteer from 'puppeteer';

class Browser {

    is_headless = false;
    browser = null;
    page = null;
    website_url = 'https://kureansiklopedi.com/tr';

    constructor(is_headless = false, browser = null, page = null) {
        this.is_headless = is_headless;
        this.browser = browser;
        this.page = page;
    }

    async init() {
        this.browser = await puppeteer.launch({
            headless: this.is_headless,
            slowMo: 50
        });
        this.page = await this.browser.newPage();
        await this.page.setViewport({ width: 1280, height: 800 });
    }


    async launch() { if (!this.browser || !this.page) {
            await this.init();
        }
        return { browser: this.browser, page: this.page };
    }

    async close() {
        if (this.browser) {
            await this.browser.close();
        }
    }

}


if (import.meta.url === `file://${process.argv[1]}`) {
    (async () => {
        try {
            console.log('Starting browser...');
            const browserInstance = new Browser(false);
            const { browser, page } = await browserInstance.launch();
            console.log('✓ Browser launched successfully');
            console.log('  Browser active:', !!browser);
            console.log('  Page active:', !!page);
            await page.goto('https://kureansiklopedi.com/tr', { waitUntil: 'networkidle0' });
            console.log('✓ Navigated to website');
            await page.waitForTimeout(8000); // Wait for 8 seconds
            await browserInstance.close();
            console.log('✓ Browser closed');
        } catch (error) {
            console.error('Error:', error.message);
        }
    })();
}


export default Browser;

