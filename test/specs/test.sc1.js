const { expect, browser, $ } = require('@wdio/globals')
const { LoginPage, AdminPage, PayGradePage } = require('../../pages')

describe('Orangehrmlive application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://opensource-demo.orangehrmlive.com/`)

        await $('input[name="username"]').setValue('Admin')
        await $('input[name="password"]').setValue('admin123')
        await $('button[type="submit"]').click()

        const pageTitleDashboard =await browser.getTitle();
        console.log(pageTitleDashboard);
        
        await browser.pause(3000);

        //await $('a[class="oxd-main-menu-item activ"]').click()                //Admin Menu
        await $('span*=Admin').click()

        await $('[aria-label="Topbar Menu"]').$('span=Job').click()

        // await $('span[class="oxd-topbar-body-nav-tab-item"]').click()   //Job
        const itemList = $('ul.oxd-dropdown-menu').$$('li')
        await itemList[1].click()                                          //Pay Grades

        //await $('button[type="button"]').click()                        //Add
        await $('button=Add').click()

        await $('form input').setValue('Petro9')  // Input Name
        //await $('[type="submit"]').click()   
        await $("form button[type='submit']").click()                     // Save       
        await $('button[data-v-10d463b7]').click()                        // Add currency  

    
        //await $('.*=Select').click()  // Open dropdown
        //await $('i[data-v-bddebfba]').click()


        //await $('div*=AED').click()  // Select currency
        await browser.pause(13000);
        await expect($('h6*=Currencies')).toBeExisting()
        //<h6 class="oxd-text oxd-text--h6 orangehrm-main-title" data-v-7b563373="">Add Currency</h6>

    })
})
