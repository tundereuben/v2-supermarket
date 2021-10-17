import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spices',
  templateUrl: './spices.component.html',
  styleUrls: ['./spices.component.css']
})
export class SpicesComponent implements OnInit {

  constructor() { }
  

  pasta = [
    {
      name: 'Tropical Sun Jamaican Jerk 179g',
      img: '/assets/images/jamaican-jerk.jpg',
      url: ''
    },
    {
      name: 'Spice Supreme Paprika',
      img: '/assets/images/paprika.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Spice Supreme Chilli Powder',
      img: '/assets/images/chili-powder.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Indomine Noodles Onions 70g x 40g',
      img: '/assets/images/barilla-lasagne.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Golden Penny Macaroni 500g ',
      img: '/assets/images/mapolina-penne.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Golden Penny Spaghetti 250g ',
      img: '/assets/images/barilla-farfalle.jpg',
      url: '/herbs/culinary'
    },
  ]

  ngOnInit() {
  }

}
