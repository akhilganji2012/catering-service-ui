import { Component, OnInit } from '@angular/core';
import { Food } from '../data/Food';
import { RestService } from '../services/rest.service';
import { Category } from '../data/Category';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  constructor(private restService: RestService) {}

  categoryList: Category[] = [];

  ngOnInit(): void {
    this.restService.getMenu().subscribe((data)=>{
      this.categoryList = data;
    })
  }
}
