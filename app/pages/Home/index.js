import Page from "../../classes/Page";

export default class Home extends Page {
  constructor(){
    super({
      id: 'home',
      element: '.home',
      elements: {
        items: document.querySelectorAll('.item')
      }
    })
  }
}
