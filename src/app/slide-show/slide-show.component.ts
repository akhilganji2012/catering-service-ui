import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css'],
})
export class SlideShowComponent implements OnInit {
  slides: string[] = [
    'assets/catering-1.jpg',
    'assets/catering-2.jpg',
    'assets/catering-3.jpg',
    'assets/catering-4.jpg',
  ];
  index = 0;

  ngOnInit(): void {
    this.recurssiveFun();
  }

  getSlide() {
    return this.slides[this.index];
  }

  getPrev() {
    this.index = this.index === 0 ? this.slides.length - 1 : this.index - 1;
  }

  getNext() {
    this.index = this.index === this.slides.length - 1 ? 0 : this.index + 1;
  }

  recurssiveFun(){
    this.getNext();
    setTimeout(()=>{
      this.recurssiveFun();
    },3000);
  }

}
