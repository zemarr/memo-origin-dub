class Helpers {
  static getCurrentStage (stage) {
    let event
    switch (stage) {
      case 'STAGE 1':
        event = 'stage_one'
        break
      case 'STAGE 2':
        event = 'stage_two'
        break
      case 'STAGE 3':
        event = 'stage_three'
        break
      case 'STAGE 4':
        event = 'stage_four'
        break
      case 'STAGE 5':
        event = 'stage_five'
        break
      case 'STAGE 6':
        event = 'stage_six'
        break
      case 'STAGE 7':
        event = 'stage_seven'
        break
      case 'STAGE 8':
        event = 'stage_eight'
        break
      default:
        event = 'onboarding'
        break
    }
    return event
  }

  static getCurrentStageName (stage) {
    let name
    switch (stage) {
      case 'STAGE 1':
        name = 'Founder Journey & Market Deep Dive'
        break
      case 'STAGE 2':
        name = 'Data Request 1'
        break
      case 'STAGE 3':
        name = 'Product & Technology Deep Dive'
        break
      case 'STAGE 4':
        name = 'Data Request 2'
        break
      case 'STAGE 5':
        name = 'Unit Economics & Financials Deep Dive'
        break
      case 'STAGE 6':
        name = 'Data Request 3'
        break
      case 'STAGE 7':
        name = 'Fundraising, Hiring & Exit Goals'
        break
      case 'STAGE 8':
        name = 'Data Request 4'
        break
      case 'STAGE 9':
        name = 'Post-Close Survey & Feedback'
        break
      default:
        name = 'Onboarding'
        break
    }
    return name
  }

  static numberWithCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  static changeToArray = (array, key) => {
    const newArray = array.map(item => {
      return item[key]
    })
    return newArray
  }

  static getFileIcon = (mimeType) => {
    if (mimeType === 'image/png' || mimeType === 'image/jpeg' || mimeType === 'image/jpg' || mimeType === 'image/svg+xml' || mimeType === 'image/vnd.microsoft.icon') {
      return 'image'
    } else if (mimeType === 'application/pdf') {
      return 'pdf'
    } else if (mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      return 'doc'
    } else if (mimeType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      return 'xls'
    } else if (mimeType === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
      return 'ppt'
    } else if (mimeType === 'application/vnd.ms-excel') {
      return 'xls'
    } else return 'file'
  }

  static getFileExtension = (filename) => {
    const getLastItem = filename.substring(filename.lastIndexOf('.') + 1)
    if (getLastItem === 'docx' || getLastItem === 'xlsx' || getLastItem === 'pptx') {
      return true
    }
    return false
  }

  static getRiskCategory (type) {
    let category
    switch (type) {
      case 'Product/Service':
        category = 'Product & Tech Risks'
        break
      case 'Proprietary or Protected':
        category = 'Product & Tech Risks'
        break
      case 'Feasibility of Business Model':
        category = 'Product & Tech Risks'
        break
      case 'Functioning prototype':
        category = 'Product & Tech Risks'
        break
      case 'Relevant technology':
        category = 'Product & Tech Risks'
        break
      case 'Existing Product Roadmap':
        category = 'Product & Tech Risks'
        break
      case 'Market Characteristics':
        category = 'Market Risks'
        break
      case 'Market Size':
        category = 'Market Risks'
        break
      case 'Threat of sectoral downturn':
        category = 'Market Risks'
        break
      case 'Threat of competition':
        category = 'Market Risks'
        break
      case 'Substitution alternatives':
        category = 'Market Risks'
        break
      case 'Threat of entrants':
        category = 'Market Risks'
        break
      case 'Knowledge of target market (size or characteristics)':
        category = 'Management Risks'
        break
      case 'Demonstrated leadership in the past':
        category = 'Management Risks'
        break
      case 'Relevant track record to venture':
        category = 'Management Risks'
        break
      case 'Referred from trustworthy source':
        category = 'Management Risks'
        break
      case 'First time founders risk':
        category = 'Management Risks'
        break
      case 'Familiar with their reputation':
        category = 'Management Risks'
        break
      case 'Complementary skills':
        category = 'Management Risks'
        break
      case 'Demonstrated Intellectual Integrity':
        category = 'Management Risks'
        break
      case 'Quality of Financials/KPI Reporting & Forecasting':
        category = 'Management Risks'
        break
      case 'Capable of sustained effort':
        category = 'Management Risks'
        break
      case 'Daily operating tasks':
        category = 'Other Risks'
        break
      case 'Distribution channels':
        category = 'Other Risks'
        break
      case 'Supplier/Sourcing risks':
        category = 'Other Risks'
        break
      case 'Threats of Regulations':
        category = 'Other Risks'
        break
      default:
        category = 'Other Risks'
        break
    }
    return category
  }

  static checkError = (status, store, router) => {
    if (status === 401 || status === 403) {
      store.dispatch('logoutUser')
      store.dispatch('resetApp')
      router.push('/sign-in')
    }
  }

  static processError = (e, store, router) => {
    if (e.response) {
      if (e.response.status === 401) {
        Helpers.checkError(e.response.status, store, router)
      }
      const errors = {
        status: true,
        message: e.response.data.message,
        color: 'red',
        type: 'error'
      }
      store.dispatch('setAlert', errors)
      setTimeout(() => {
        store.dispatch('setAlert', {
          status: false,
          message: null,
          color: null,
          type: null
        })
      }, 2000)
    } else if (e.message === 'Network Error') {
      const errors = {
        status: true,
        message: 'Network Error check your internet connection',
        color: 'red',
        type: 'error'
      }
      store.dispatch('setAlert', errors)
      setTimeout(() => {
        store.dispatch('setAlert', {
          status: false,
          message: null,
          color: null,
          type: null
        })
      }, 3000)
    }
  }

  static processDiligenceSuccess = (response, store, message) => {
    store.dispatch('setCurrentCompany', response.data.data)
    const success = {
      status: true,
      message: message,
      color: 'green',
      type: 'success'
    }
    store.dispatch('setAlert', success)
    setTimeout(() => {
      store.dispatch('setAlert', {
        status: false,
        message: null,
        color: null,
        type: null
      })
    }, 2000)
  }

  static processRiskSuccess = (response, store, message) => {
    const success = {
      status: true,
      message: message,
      color: 'green',
      type: 'success'
    }
    store.dispatch('setAlert', success)
    setTimeout(() => {
      store.dispatch('setAlert', {
        status: false,
        message: null,
        color: null,
        type: null
      })
    }, 2000)
  }
}

export default Helpers
