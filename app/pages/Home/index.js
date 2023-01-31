import Page from "../../classes/Page"

export default class Home extends Page {
  constructor(){
    super({
      id: 'home',
      element: '.home',
      elements: {
        wrapper: '.home__wrapper'
      }
    })
  }

  show(){
    console.log('show!')

    return super.show()
  }

  hide(){
    console.log('hide!')

    return super.hide()
  }
}
