class Detection {
  isMobile(){
    return /(Mobi|Andrdoid|Tablet|iPad|iPhone)/i.test(navigator.userAgent)
  }
}

const DetectionManager = new Detection()

export default DetectionManager
