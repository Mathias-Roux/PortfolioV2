class Detection {
  isPhone () {
    if (!this.isPhoneChecked) {
      this.isPhoneChecked = true

      this.isPhoneCheck = document.documentElement.classList.contains('phone')
    }

    return this.isPhoneCheck
  }

  isTablet () {
    if (!this.isTabletChecked) {
      this.isTabletChecked = true

      this.isTabletCheck = document.documentElement.classList.contains('tablet')
    }

    return this.isTabletCheck
  }

  isDesktop () {
    return !this.isPhone()
  }
}

const DetectionManager = new Detection()

export default DetectionManager
