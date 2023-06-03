class Detection {
  isDesktop(){
    return /(Windows NT|Macintosh|Linux)/i.test(navigator.userAgent)
  }
}

const DetectionManager = new Detection()

export default DetectionManager
