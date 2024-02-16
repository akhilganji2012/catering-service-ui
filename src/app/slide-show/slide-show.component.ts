import { Slide } from '../data/Slide';
import { RestService } from './../services/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css'],
})
export class SlideShowComponent implements OnInit {
  data: Slide[] = [];
  constructor(private restService: RestService) {}

  index = 0;

  ngOnInit(): void {
    this.restService.getSlides().subscribe((slides) => {
      this.data = slides;
      console.log(slides);
      this.recurssiveFun();
    });
  }

  getSlide() {
    return (this.data.length > 0)?this.data[this.index].imageSrcUrl:'';
  }

  getPrev() {
    this.index = this.index === 0 ? this.data.length - 1 : this.index - 1;
  }

  getNext() {
    this.index = this.index === this.data.length - 1 ? 0 : this.index + 1;
  }

  recurssiveFun() {
    if (this.data.length > 0) this.getNext();
    setTimeout(() => {
      this.recurssiveFun();
    }, 3000);
  }
}
