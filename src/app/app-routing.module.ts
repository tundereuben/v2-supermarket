import { Component, NgModule } from '@angular/core';
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
import { CulinaryComponent } from './herbs/culinary/culinary.component';
import { SpicesComponent } from './herbs/spices/spices.component';
import { AllVegetablesComponent } from './vegetables/all-vegetables/all-vegetables.component';
import { FreshVegetablesComponent } from './vegetables/fresh-vegetables/fresh-vegetables.component';
import { FreshFruitsComponent } from './vegetables/fresh-fruits/fresh-fruits.component';
import { FourteenHealthiestComponent } from './vegetables/fourteen-healthiest/fourteen-healthiest.component';
import { FrozenFruitsAndVegetablesComponent } from './vegetables/frozen-fruits-and-vegetables/frozen-fruits-and-vegetables.component';
import { FreshPoultryComponent } from './meats/fresh-poultry/fresh-poultry.component';
import { FreshCowComponent } from './meats/fresh-cow/fresh-cow.component';
import { FreshGoatComponent } from './meats/fresh-goat/fresh-goat.component';
import { PorkComponent } from './meats/pork/pork.component';
import { DairyCheeseEggsComponent } from './food-cupboard/dairy-cheese-eggs/dairy-cheese-eggs.component';
import { DrinksComponent } from './food-cupboard/drinks/drinks.component';
import { SwallowComponent } from './food-cupboard/swallow/swallow.component';
import { JamsSpreadMargarineHoneyComponent } from './food-cupboard/jams-spread-margarine-honey/jams-spread-margarine-honey.component';
import { OlivesPicklesComponent } from './food-cupboard/olives-pickles/olives-pickles.component';
import { CannedFoodsComponent } from './food-cupboard/canned-foods/canned-foods.component';
import { SugarSweetnersVinegarComponent } from './food-cupboard/sugar-sweetners-vinegar/sugar-sweetners-vinegar.component';
import { CustardJellyPapComponent } from './food-cupboard/custard-jelly-pap/custard-jelly-pap.component';
import { BirthdayGiftComponent } from './gift-store/birthday-gift/birthday-gift.component';
import { ChristmasGiftComponent } from './gift-store/christmas-gift/christmas-gift.component';
import { WeddingGiftComponent } from './gift-store/wedding-gift/wedding-gift.component';
import { SpecialOccasionComponent } from './gift-store/special-occasion/special-occasion.component';
import { BreakfastComponent } from './restaurant/breakfast/breakfast.component';
import { LunchDinnerComponent } from './restaurant/lunch-dinner/lunch-dinner.component';
import { SnacksComponent } from './restaurant/snacks/snacks.component';
import { SoupComponent } from './restaurant/soup/soup.component';
import { NaijaVegetablesComponent } from './naija-food/naija-vegetables/naija-vegetables.component';
import { NaijaSpicesAndCondimentsComponent } from './naija-food/naija-spices-and-condiments/naija-spices-and-condiments.component';
import { NaijaSnacksComponent } from './naija-food/naija-snacks/naija-snacks.component';
import { BeefRollsAndCakesComponent } from './snacks/beef-rolls-and-cakes/beef-rolls-and-cakes.component';
import { BiscuitCookiesAndWafersComponent } from './snacks/biscuit-cookies-and-wafers/biscuit-cookies-and-wafers.component';
import { CandyAndChewingGumsComponent } from './snacks/candy-and-chewing-gums/candy-and-chewing-gums.component';
import { ChocolatesComponent } from './snacks/chocolates/chocolates.component';
import { EnergyAndGranolaBarsComponent } from './snacks/energy-and-granola-bars/energy-and-granola-bars.component';
import { NutsAndDriedFruitsComponent } from './snacks/nuts-and-dried-fruits/nuts-and-dried-fruits.component';
import { PopcornComponent } from './snacks/popcorn/popcorn.component';
import { PotatoAndPlantainChipsComponent } from './snacks/potato-and-plantain-chips/potato-and-plantain-chips.component';
import { BatteriesSocketsPlugsAndLightBulbsComponent } from './household-items/batteries-sockets-plugs-and-light-bulbs/batteries-sockets-plugs-and-light-bulbs.component';
import { HandwashAndSanitisersComponent } from './household-items/handwash-and-sanitisers/handwash-and-sanitisers.component';
import { HomeDecorAndBeddingsComponent } from './household-items/home-decor-and-beddings/home-decor-and-beddings.component';
import { HomeFurnitureComponent } from './household-items/home-furniture/home-furniture.component';
import { InsecticidesAndRatTrapsComponent } from './household-items/insecticides-and-rat-traps/insecticides-and-rat-traps.component';
import { ShoePolishAndFragnancesComponent } from './household-items/shoe-polish-and-fragnances/shoe-polish-and-fragnances.component';
import { ToiletAndFacialTissueComponent } from './household-items/toilet-and-facial-tissue/toilet-and-facial-tissue.component';
import { WasteBinsAndBinBagsComponent } from './household-items/waste-bins-and-bin-bags/waste-bins-and-bin-bags.component';
import { KitchenTowelsAndServiettsComponent } from './kitchen-and-dining/kitchen-towels-and-servietts/kitchen-towels-and-servietts.component';
import { PetsComponent } from './household-items/pets/pets.component';
import { LaundryAndCarcareComponent } from './household-items/laundry-and-carcare/laundry-and-carcare.component';
import { AirFreshnersAndFragnancesComponent } from './household-items/air-freshners-and-fragnances/air-freshners-and-fragnances.component';
import { KitchenUtensilsComponent } from './kitchen-and-dining/kitchen-utensils/kitchen-utensils.component';
import { NylonBagsAndCarrySacksComponent } from './kitchen-and-dining/nylon-bags-and-carry-sacks/nylon-bags-and-carry-sacks.component';
import { StorageAndOrganizationComponent } from './kitchen-and-dining/storage-and-organization/storage-and-organization.component';
import { BakewareAndCookwareComponent } from './kitchen-and-dining/bakeware-and-cookware/bakeware-and-cookware.component';
import { FoilAndClingFilmComponent } from './kitchen-and-dining/foil-and-cling-film/foil-and-cling-film.component';
import { FoodContainersComponent } from './kitchen-and-dining/food-containers/food-containers.component';
import { FreezerAndSandwichBagsComponent } from './kitchen-and-dining/freezer-and-sandwich-bags/freezer-and-sandwich-bags.component';
import { FrozenMeatsComponent } from './meats/frozen-meats/frozen-meats.component';
import { StreetFoodComponent } from './resturant@home/street-food/street-food.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'restaurant/breakfast', component: BreakfastComponent },
  { path: 'restaurant/lunch-and-dinner', component: LunchDinnerComponent  },
  { path: 'restaurant/snacks', component: SnacksComponent },
  { path: 'restaurant/soup', component: SoupComponent },
  { path: 'restaurant/street-food', component: StreetFoodComponent },

  { path: 'gift-store/birthday-gift', component: BirthdayGiftComponent },
  { path: 'gift-store/christmas-gift', component: ChristmasGiftComponent },
  { path: 'gift-store/special-occasion', component: SpecialOccasionComponent },
  { path: 'gift-store/wedding-gift', component: WeddingGiftComponent },

  { path: 'food-cupboard/beverages-and-dairy', component: BeveragesAndDairyComponent },
  { path: 'food-cupboard/dairy-cheese-eggs', component: DairyCheeseEggsComponent },
  { path: 'food-cupboard/drinks', component: DrinksComponent },
  { path: 'food-cupboard/cereal', component: CerealComponent },
  { path: 'food-cupboard/condiments', component: CondimentComponent },
  { path: 'food-cupboard/flour', component: FlourComponent },
  { path: 'food-cupboard/grains', component: GrainsComponent },
  { path: 'food-cupboard/oil', component: OilComponent },
  { path: 'food-cupboard/pasta', component: PastaComponent },
  { path: 'food-cupboard/salad-dressing', component: SaladDressingComponent },
  { path: 'food-cupboard/sausages-and-hot-dog', component:  SausageAndHotDogComponent },
  { path: 'food-cupboard/tubers', component: TubersComponent },
  { path: 'food-cupboard/swallow', component: SwallowComponent },
  { path: 'food-cupboard/jams-spread-margarine-honey', component: JamsSpreadMargarineHoneyComponent },
  { path: 'food-cupboard/olives-pickles', component: OlivesPicklesComponent },
  { path: 'food-cupboard/canned-foods', component: CannedFoodsComponent },
  { path: 'food-cupboard/sugar-sweetners-vinegar', component: SugarSweetnersVinegarComponent },
  { path: 'food-cupboard/custard-jelly-pap', component: CustardJellyPapComponent },

  { path: 'herbs/culinary', component: CulinaryComponent },
  { path: 'herbs/spices', component: SpicesComponent },

  { path: 'vegetables-and-fruits/fresh-vegetables', component: FreshVegetablesComponent },
  { path: 'vegetables-and-fruits/fresh-fruits', component: FreshFruitsComponent },
  { path: 'vegetables-and-fruits/fourteen-healthiest', component: FourteenHealthiestComponent },
  { path: 'vegetables-and-fruits/frozen-fruits-and-vegetables', component: FrozenFruitsAndVegetablesComponent },

  { path: 'meats/fresh-poultry', component: FreshPoultryComponent },
  { path: 'meats/fresh-cow', component: FreshCowComponent },
  { path: 'meats/fresh-goat', component: FreshGoatComponent },
  { path: 'meats/pork', component: PorkComponent },
  { path: 'meats/frozen-meat', component: FrozenMeatsComponent },


  { path: 'naija-food/naija-vegetables', component: NaijaVegetablesComponent },
  { path: 'naija-food/naija-spices-and-condiment', component: NaijaSpicesAndCondimentsComponent },
  { path: 'naija-food/tubers', component: TubersComponent },
  { path: 'naija-food/naija-snacks', component: NaijaSnacksComponent },
 


  { path: 'snacks/beef-rolls-and-cakes', component: BeefRollsAndCakesComponent },
  { path: 'snacks/biscuit-cookies-and-wafers', component: BiscuitCookiesAndWafersComponent },
  { path: 'snacks/candy-and-chewing-gums', component: CandyAndChewingGumsComponent },
  { path: 'snacks/chocolates', component: ChocolatesComponent },
  { path: 'snacks/energy-and-granola-bars', component: EnergyAndGranolaBarsComponent },
  { path: 'snacks/nuts-and-dried-fuits', component: NutsAndDriedFruitsComponent },
  { path: 'snacks/popcorn', component: PopcornComponent },
  { path: 'snacks/potato-and-plantain-chips', component: PotatoAndPlantainChipsComponent },

  { path: 'household-items/batteries-sockets-plugs-and-light-bulbs', component: BatteriesSocketsPlugsAndLightBulbsComponent },
  { path: 'household-items/hand-wash-and-santisers', component:HandwashAndSanitisersComponent  },
  { path: 'household-items/home-decor-and-beddings', component:HomeDecorAndBeddingsComponent  },
  { path: 'household-items/home-furniture', component:HomeFurnitureComponent  },
  { path: 'household-items/insecticides-and-rat-trap', component:InsecticidesAndRatTrapsComponent  },
  { path: 'household-items/shoe-polish-and-fragnances', component:ShoePolishAndFragnancesComponent  },
  { path: 'household-items/toilet-and-facial-tissue', component:ToiletAndFacialTissueComponent  },
  { path: 'household-items/waste-bins-and-bin-bags', component:WasteBinsAndBinBagsComponent  },
  { path: 'household-items/pets', component:PetsComponent  },
  { path: 'household-items/laundry-and-carcare', component:LaundryAndCarcareComponent  },
  { path: 'household-items/air-freshners-and-fragnances', component:AirFreshnersAndFragnancesComponent  },
  

  { path: 'kitchen-and-dining/kitchen-towels-and-servietts', component:KitchenTowelsAndServiettsComponent },
  { path: 'kitchen-and-dining/kitchen-utensils', component:KitchenUtensilsComponent },
  { path: 'kitchen-and-dining/nylon-bags-and-carry-sacks', component:NylonBagsAndCarrySacksComponent },
  { path: 'kitchen-and-dining/storage-and-organization', component:StorageAndOrganizationComponent },
  { path: 'kitchen-and-dining/bakware-and-cookware', component:BakewareAndCookwareComponent },
  { path: 'kitchen-and-dining/foil-and-cling-film', component:FoilAndClingFilmComponent },
  { path: 'kitchen-and-dining/food-containers', component:FoodContainersComponent },
  { path: 'kitchen-and-dining/freezer-and-sandwich-bags', component:FreezerAndSandwichBagsComponent },

  
  


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
