import { Component, OnInit } from '@angular/core';
import { Food } from '../data/food';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  constructor() {}

  sampleFoodItem = { name: 'Veg Soup' } as Food;

  categories = ['Soups', 'Appetizers', 'Biryani'];

  soupFoodItems = [
    {
      name: 'Veg Soup',
      imageLocation: 'assets/veg-soup.jpg',
      id: '001',
      price: 9.99,
    } as Food,
    {
      name: 'Egg drop Soup',
      imageLocation: 'assets/egg-drop-soup.jpg',
      id: '002',
      price: 9.99,
    } as Food,
    {
      name: 'Chicken Soup',
      imageLocation: 'assets/chicken-soup.jpg',
      id: '003',
      price: 9.99,
    } as Food,
    {
      name: 'Naatu kodi Soup',
      imageLocation: 'assets/naatu-kodi-soup.jpeg',
      id: '004',
      price: 9.99,
    } as Food,
    {
      name: 'Mutton bone Soup',
      imageLocation: 'assets/mutton-bone-soup.jpg',
      id: '005',
      price: 9.99,
    } as Food,
  ];
  appetizerFoodItems = [
    {
      name: 'Onion Samosa',
      imageLocation: 'assets/samosa.jpeg',
      id: '006',
      price: 9.99,
    } as Food,
    {
      name: 'Chicken wings',
      imageLocation: 'assets/wings.jpg',
      id: '007',
      price: 9.99,
    } as Food,
  ];
  biryaniFoodItems = [
    {
      name: 'Chicken biryani',
      imageLocation: 'assets/chicken-biryani.jpeg',
      id: '008',
      price: 9.99,
    } as Food,
    {
      name: 'Chicken boneless biryani',
      imageLocation: 'assets/biryani.jpg',
      id: '009',
      price: 9.99,
    } as Food,
  ];

  soupCategory = {
    name: 'Soups',
    foodItems: this.soupFoodItems,
  };

  appetizerCategory = {
    name: 'Appetizer',
    foodItems: this.appetizerFoodItems,
  };

  biryaniCategory = {
    name: 'Biryanis',
    foodItems: this.biryaniFoodItems,
  };

  obj = [this.soupCategory, this.appetizerCategory, this.biryaniCategory];

  ngOnInit(): void {}
}
