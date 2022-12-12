import Page from "../../classes/Page";

export default class Home extends Page {
  constructor(){
    super({
      id: 'home',
      element: '.home',
      elements: {
        home: true,
        wrapper: document.querySelector('.home__wrapper'),
        items: document.querySelectorAll('.item')
      }
    })
  }
}
