import Page from "../../classes/Page"

export default class About extends Page {
  constructor(){
    super({
      id: 'about',
      element: '.about'
    })
  }

  async show(){
    console.log('show!')

    return super.show()
  }

  hide(){
    console.log('hide!')

    return super.hide()
  }
}
