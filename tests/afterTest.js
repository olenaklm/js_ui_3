const { LoginPage, AdminPage } = require('./pages')

afterEach(() => {
  const loginPage = new LoginPage()
  const adminPage = new AdminPage()

  browser.url('/')
  loginPage.login('Admin', 'admin123')
  adminPage.goToPayGrades()

  const payGradeName = browser.execute(() => {
    const payGradeName = localStorage.getItem('payGradeName')
    localStorage.removeItem('payGradeName')
    return payGradeName
  })

  if (payGradeName) {
    const payGrade = adminPage.getPayGradeByName(payGradeName)
    if (payGrade) {
      payGrade.$('input[type="checkbox"]').click()
      $('#btnDelete').click()
      $('#dialogDeleteBtn').click()
    }
  }
})