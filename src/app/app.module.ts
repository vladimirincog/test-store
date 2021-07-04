import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BasketPageComponent } from './basket-page/basket-page.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CatalogPageComponent,
    BasketPageComponent,
    MainLayoutComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
