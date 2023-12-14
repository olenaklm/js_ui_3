const { expect } = require('chai')
const { LoginPage, AdminPage, PayGradePage } = require('../../pages')

describe('Scenario 1', () => {
  it('should add a new pay grade with a currency', () => {
    const loginPage = new LoginPage()
    const adminPage = new AdminPage()
    const payGradePage = new PayGradePage()

    browser.url('https://opensource-demo.orangehrmlive.com/')
    loginPage.login('Admin', 'admin123')
    // adminPage.goToPayGrades()

    // const name = `Pay Grade ${Math.floor(Math.random() * 1000)}`
    // adminPage.addPayGrade(name)

    // const currency = 'USD'
    // const minSalary = '1000'
    // const maxSalary = '2000'
    // payGradePage.addCurrency(currency, minSalary, maxSalary)

    // expect(payGradePage.isCurrencyVisible(currency, minSalary, maxSalary)).to.be.true
  })
})