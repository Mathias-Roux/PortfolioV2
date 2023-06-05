class Detection {
  isMobile(){
    return /Mobi|Andrdoid|Tablet|iPad|iPhone/.test(navigator.userAgent) || "MacIntel"===navigator.platform&&e.maxTouchPoints>1
  }
}

const DetectionManager = new Detection()

export default DetectionManager
