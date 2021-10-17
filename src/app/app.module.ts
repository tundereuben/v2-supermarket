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
import { FreshVegetablesComponent } from './vegetables/fresh-vegetables/fresh-vegetables.component';
import { FreshFruitsComponent } from './vegetables/fresh-fruits/fresh-fruits.component';
import { FrozenFruitsAndVegetablesComponent } from './vegetables/frozen-fruits-and-vegetables/frozen-fruits-and-vegetables.component';
import { DairyCheeseEggsComponent } from './food-cupboard/dairy-cheese-eggs/dairy-cheese-eggs.component';
import { JamsSpreadMargarineHoneyComponent } from './food-cupboard/jams-spread-margarine-honey/jams-spread-margarine-honey.component';
import { OlivesPicklesComponent } from './food-cupboard/olives-pickles/olives-pickles.component';
import { SugarSweetnersVinegarComponent } from './food-cupboard/sugar-sweetners-vinegar/sugar-sweetners-vinegar.component';
import { CannedFoodsComponent } from './food-cupboard/canned-foods/canned-foods.component';
import { SwallowComponent } from './food-cupboard/swallow/swallow.component';
import { CustardJellyPapComponent } from './food-cupboard/custard-jelly-pap/custard-jelly-pap.component';
import { ToiletAndFacialTissueComponent } from './household-items/toilet-and-facial-tissue/toilet-and-facial-tissue.component';
import { LaundryAndCarcareComponent } from './household-items/laundry-and-carcare/laundry-and-carcare.component';
import { HandwashAndSanitisersComponent } from './household-items/handwash-and-sanitisers/handwash-and-sanitisers.component';
import { InsecticidesAndRatTrapsComponent } from './household-items/insecticides-and-rat-traps/insecticides-and-rat-traps.component';
import { WasteBinsAndBinBagsComponent } from './household-items/waste-bins-and-bin-bags/waste-bins-and-bin-bags.component';
import { BatteriesSocketsPlugsAndLightBulbsComponent } from './household-items/batteries-sockets-plugs-and-light-bulbs/batteries-sockets-plugs-and-light-bulbs.component';
import { HomeDecorAndBeddingsComponent } from './household-items/home-decor-and-beddings/home-decor-and-beddings.component';
import { HomeFurnitureComponent } from './household-items/home-furniture/home-furniture.component';
import { ShoePolishAndFragnancesComponent } from './household-items/shoe-polish-and-fragnances/shoe-polish-and-fragnances.component';
import { PetsComponent } from './household-items/pets/pets.component';
import { BiscuitAndWafersComponent } from './biscuit-and-wafers/biscuit-and-wafers.component';
import { BiscuitCookiesAndWafersComponent } from './snacks/biscuit-cookies-and-wafers/biscuit-cookies-and-wafers.component';
import { CandyAndChewingGumsComponent } from './snacks/candy-and-chewing-gums/candy-and-chewing-gums.component';
import { ChocolatesComponent } from './snacks/chocolates/chocolates.component';
import { NutsAndDriedFruitsComponent } from './snacks/nuts-and-dried-fruits/nuts-and-dried-fruits.component';
import { PotatoAndPlantainChipsComponent } from './snacks/potato-and-plantain-chips/potato-and-plantain-chips.component';
import { PopcornComponent } from './snacks/popcorn/popcorn.component';
import { EnergyAndGranolaBarsComponent } from './snacks/energy-and-granola-bars/energy-and-granola-bars.component';
import { BeefRollsAndCakesComponent } from './snacks/beef-rolls-and-cakes/beef-rolls-and-cakes.component';
import { NaijaSnacksComponent } from './naija-food/naija-snacks/naija-snacks.component';
import { NaijaTubersComponent } from './naija-food/naija-tubers/naija-tubers.component';
import { NaijaSpicesAndCondimentsComponent } from './naija-food/naija-spices-and-condiments/naija-spices-and-condiments.component';
import { KitchenTowelsAndServiettsComponent } from './kitchen-and-dining/kitchen-towels-and-servietts/kitchen-towels-and-servietts.component';
import { FoilAndClingFilmComponent } from './kitchen-and-dining/foil-and-cling-film/foil-and-cling-film.component';
import { FreezerAndSandwichBagsComponent } from './kitchen-and-dining/freezer-and-sandwich-bags/freezer-and-sandwich-bags.component';
import { FoodContainersComponent } from './kitchen-and-dining/food-containers/food-containers.component';
import { StorageAndOrganizationComponent } from './kitchen-and-dining/storage-and-organization/storage-and-organization.component';
import { BakewareAndCookwareComponent } from './kitchen-and-dining/bakeware-and-cookware/bakeware-and-cookware.component';
import { KitchenUtensilsComponent } from './kitchen-and-dining/kitchen-utensils/kitchen-utensils.component';
import { NylonBagsAndCarrySacksComponent } from './kitchen-and-dining/nylon-bags-and-carry-sacks/nylon-bags-and-carry-sacks.component';
import { NaijaVegetablesComponent } from './naija-food/naija-vegetables/naija-vegetables.component';
import { AirFreshnersAndFragnancesComponent } from './household-items/air-freshners-and-fragnances/air-freshners-and-fragnances.component';
import { FrozenMeatsComponent } from './meats/frozen-meats/frozen-meats.component';
import { FoodSharingCornerComponent } from './food-sharing-corner/food-sharing-corner.component';
import { StreetFoodComponent } from './resturant@home/street-food/street-food.component';

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
    FreshVegetablesComponent,
    FreshFruitsComponent,
    FrozenFruitsAndVegetablesComponent,
    DairyCheeseEggsComponent,
    JamsSpreadMargarineHoneyComponent,
    OlivesPicklesComponent,
    SugarSweetnersVinegarComponent,
    CannedFoodsComponent,
    SwallowComponent,
    CustardJellyPapComponent,
    ToiletAndFacialTissueComponent,
    LaundryAndCarcareComponent,
    HandwashAndSanitisersComponent,
    InsecticidesAndRatTrapsComponent,
    WasteBinsAndBinBagsComponent,
    BatteriesSocketsPlugsAndLightBulbsComponent,
    HomeDecorAndBeddingsComponent,
    HomeFurnitureComponent,
    ShoePolishAndFragnancesComponent,
    PetsComponent,
    BiscuitAndWafersComponent,
    BiscuitCookiesAndWafersComponent,
    CandyAndChewingGumsComponent,
    ChocolatesComponent,
    NutsAndDriedFruitsComponent,
    PotatoAndPlantainChipsComponent,
    PopcornComponent,
    EnergyAndGranolaBarsComponent,
    BeefRollsAndCakesComponent,
    NaijaSnacksComponent,
    NaijaTubersComponent,
    NaijaSpicesAndCondimentsComponent,
    KitchenTowelsAndServiettsComponent,
    FoilAndClingFilmComponent,
    FreezerAndSandwichBagsComponent,
    FoodContainersComponent,
    StorageAndOrganizationComponent,
    BakewareAndCookwareComponent,
    KitchenUtensilsComponent,
    NylonBagsAndCarrySacksComponent,
    NaijaVegetablesComponent,
    AirFreshnersAndFragnancesComponent,
    FrozenMeatsComponent,
    FoodSharingCornerComponent,
    StreetFoodComponent
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
