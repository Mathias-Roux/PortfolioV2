import GSAP from 'gsap';

import Page from "../../classes/Page";

export default class Detail extends Page {
  constructor(){
    super({
      id: 'detail',
      element: '.detail'
    })
  }

  show() {
    const timeline = GSAP.timeline({
      delay: 2,
    });

    timeline.fromTo(
      this.element, {
        autoAlpha: 0,
      }, {
        autoAlpha: 1,
      });

    super.show(timeline);
  }
}
