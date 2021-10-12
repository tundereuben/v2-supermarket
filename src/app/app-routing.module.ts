import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BeveragesAndDairyComponent} from './food-cupboard/beverages-and-dairy/beverages-and-dairy.component';
import {CondimentComponent} from './food-cupboard/condiment/condiment.component';
import {CerealComponent} from './food-cupboard/cereal/cereal.component';
import {FlourComponent} from './food-cupboard/flour/flour.component';
import {GrainsComponent} from './food-cupboard/grains/grains.component';
import {OilComponent} from './food-cupboard/oil/oil.component';
import {PastaComponent} from './food-cupboard/pasta/pasta.component';
import {SaladDressingComponent} from './food-cupboard/salad-dressing/salad-dressing.component';
import {SausageAndHotDogComponent} from './food-cupboard/sausage-and-hot-dog/sausage-and-hot-dog.component';
import {TubersComponent} from './food-cupboard/tubers/tubers.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'food-cupboard/beverages-and-dairy', component: BeveragesAndDairyComponent },
  { path: 'food-cupboard/cereal', component: CerealComponent },
  { path: 'food-cupboard/condiments', component: CondimentComponent },
  { path: 'food-cupboard/flour', component: FlourComponent },
  { path: 'food-cupboard/grains', component: GrainsComponent },
  { path: 'food-cupboard/oil', component: OilComponent },
  { path: 'food-cupboard/pasta', component: PastaComponent },
  { path: 'food-cupboard/salad-dressing', component: SaladDressingComponent },
  { path: 'food-cupboard/sausage-and-hot-dog', component:  SausageAndHotDogComponent },
  { path: 'food-cupboard/tubers', component: TubersComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
