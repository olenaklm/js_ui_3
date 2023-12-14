class LoginPage {
    get usernameInput() { return $('input[name="username"]') }
    get passwordInput() { return $('input[name="password"]') }
    get loginButton() { return $('button[type="submit"]') }
  
    login(username, password) {
      this.usernameInput.setValue(username)
      this.passwordInput.setValue(password)
      this.loginButton.click()
    }
  }
  
  class AdminPage {
    get adminMenu() { return $('#menu_admin_viewAdminModule') }
    get jobMenu() { return $('#menu_admin_Job') }
    get payGradesMenu() { return $('#menu_admin_viewPayGrades') }
    get addButton() { return $('#btnAdd') }
  
    goToPayGrades() {
      this.adminMenu.click()
      this.jobMenu.click()
      this.payGradesMenu.click()
    }
  
    addPayGrade(name) {
      this.addButton.click()
      $('#payGrade_name').setValue(name)
      $('#btnSave').click()
    }
  
    getPayGradeByName(name) {
      return $(`//a[text()='${name}']`)
    }
  }
  
  class PayGradePage {
    get addCurrencyButton() { return $('#btnAddCurrency') }
    get currencyDropdown() { return $('#payGradeCurrency_currencyName') }
    get minSalaryInput() { return $('#payGradeCurrency_minSalary') }
    get maxSalaryInput() { return $('#payGradeCurrency_maxSalary') }
    get saveButton() { return $('#btnSaveCurrency') }
    get cancelButton() { return $('#btnCancelCurrency') }
  
    addCurrency(currency, minSalary, maxSalary) {
      this.addCurrencyButton.click()
      this.currencyDropdown.selectByVisibleText(currency)
      this.minSalaryInput.setValue(minSalary)
      this.maxSalaryInput.setValue(maxSalary)
      this.saveButton.click()
    }
  
    isCurrencyVisible(currency, minSalary, maxSalary) {
      const currencyRow = $(`//td[text()='${currency}']/parent::tr`)
      const actualMinSalary = currencyRow.$('td:nth-child(2)').getText()
      const actualMaxSalary = currencyRow.$('td:nth-child(3)').getText()
      return actualMinSalary === minSalary && actualMaxSalary === maxSalary
    }
  }
  
  module.exports = {
    LoginPage,
    AdminPage,
    PayGradePage
  }