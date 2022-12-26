import Page from "../../classes/Page";

export default class Detail extends Page {
  constructor(){
    super({
      id: 'detail',
      element: '.detail',
      elements: {
        navigation: document.querySelector('.navigation'),
        wrapper: '.detail__gallery__wrapper'
      }
    })
  }
}
