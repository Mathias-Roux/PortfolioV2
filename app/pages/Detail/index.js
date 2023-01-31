import Page from "../../classes/Page"

export default class Detail extends Page {
  constructor(){
    super({
      id: 'detail',
      element: '.detail',
      elements: {
        wrapper: '.detail__gallery__wrapper'
      }
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
