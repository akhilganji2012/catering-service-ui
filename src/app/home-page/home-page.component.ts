import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {

  constructor(){

  }

  scrollToBottom(el: HTMLElement): void {
    el.scrollIntoView({ behavior: 'smooth', block: "start", inline: "start" });
  }
  // scrollToTop(el: HTMLElement): void {
  //   el.scrollTo(0,1000);
  // }
}
