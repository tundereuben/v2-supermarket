import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CerealComponent } from './food-cupboard/cereal/cereal.component';
import { CondimentComponent } from './food-cupboard/condiment/condiment.component';
import { DrinksComponent } from './food-cupboard/drinks/drinks.component';
import { FlourComponent } from './food-cupboard/flour/flour.component';
import { GrainsComponent } from './food-cupboard/grains/grains.component';
import { OilComponent } from './food-cupboard/oil/oil.component';
import { PastaComponent } from './food-cupboard/pasta/pasta.component';
import { SaladDressingComponent } from './food-cupboard/salad-dressing/salad-dressing.component';
import { SausageAndHotDogComponent } from './food-cupboard/sausage-and-hot-dog/sausage-and-hot-dog.component';
import { TubersComponent } from './food-cupboard/tubers/tubers.component';
import { BeveragesAndDairyComponent } from './food-cupboard/beverages-and-dairy/beverages-and-dairy.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { BirthdayGiftComponent } from './gift-store/birthday-gift/birthday-gift.component';
import { ChristmasGiftComponent } from './gift-store/christmas-gift/christmas-gift.component';
import { SpecialOccasionComponent } from './gift-store/special-occasion/special-occasion.component';
import { WeddingGiftComponent } from './gift-store/wedding-gift/wedding-gift.component';
import { CulinaryComponent } from './herbs/culinary/culinary.component';
import { MedicinalComponent } from './herbs/medicinal/medicinal.component';
import { SpicesComponent } from './herbs/spices/spices.component';
import { FreshCowComponent } from './meats/fresh-cow/fresh-cow.component';
import { FreshGoatComponent } from './meats/fresh-goat/fresh-goat.component';
import { FreshPoultryComponent } from './meats/fresh-poultry/fresh-poultry.component';
import { PorkComponent } from './meats/pork/pork.component';
import { BreakfastComponent } from './restaurant/breakfast/breakfast.component';
import { LunchDinnerComponent } from './restaurant/lunch-dinner/lunch-dinner.component';
import { SnacksComponent } from './restaurant/snacks/snacks.component';
import { SoupComponent } from './restaurant/soup/soup.component';
import { ArtisanSouvenirComponent } from './souvenir-store/artisan-souvenir/artisan-souvenir.component';
import { ChildrenPartySouvenirComponent } from './souvenir-store/children-party-souvenir/children-party-souvenir.component';
import { OwambeSouvenirComponent } from './souvenir-store/owambe-souvenir/owambe-souvenir.component';
import { ProfessionalSouvenirComponent } from './souvenir-store/professional-souvenir/professional-souvenir.component';
import { AllVegetablesComponent } from './vegetables/all-vegetables/all-vegetables.component';
import { FourteenHealthiestComponent } from './vegetables/fourteen-healthiest/fourteen-healthiest.component';
import { FruitsComponent } from './vegetables/fruits/fruits.component';
import { NaijaVegetablesComponent } from './vegetables/naija-vegetables/naija-vegetables.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CerealComponent,
    CondimentComponent,
    DrinksComponent,
    FlourComponent,
    GrainsComponent,
    OilComponent,
    PastaComponent,
    SaladDressingComponent,
    SausageAndHotDogComponent,
    TubersComponent,
    BeveragesAndDairyComponent,
    BirthdayGiftComponent,
    ChristmasGiftComponent,
    SpecialOccasionComponent,
    WeddingGiftComponent,
    CulinaryComponent,
    MedicinalComponent,
    SpicesComponent,
    FreshCowComponent,
    FreshGoatComponent,
    FreshPoultryComponent,
    PorkComponent,
    BreakfastComponent,
    LunchDinnerComponent,
    SnacksComponent,
    SoupComponent,
    ArtisanSouvenirComponent,
    ChildrenPartySouvenirComponent,
    OwambeSouvenirComponent,
    ProfessionalSouvenirComponent,
    AllVegetablesComponent,
    FourteenHealthiestComponent,
    FruitsComponent,
    NaijaVegetablesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
