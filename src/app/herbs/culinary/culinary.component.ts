import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-culinary',
  templateUrl: './culinary.component.html',
  styleUrls: ['./culinary.component.css']
})
export class CulinaryComponent implements OnInit {

  constructor() { }

  pasta = [
    {
      name: 'Fresh Basil Leave(A bunch)',
      img: '/assets/images/basil-leaf.jpg',
      url: ''
    },
    {
      name: 'Spice Supreme Ground Cumin',
      img: '/assets/images/ground-cumin.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'la Flor Cinnamon Stick',
      img: '/assets/images/cinnamon-sticks.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'F`',
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
