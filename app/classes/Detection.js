class Detection {
  isMobile(){
    return /Mobi|Andrdoid|Tablet|iPad|iPhone/.test(navigator.userAgent) 
    || "MacIntel"===navigator.platform && navigator.maxTouchPoints>1
  }
}

const DetectionManager = new Detection()

export default DetectionManager
