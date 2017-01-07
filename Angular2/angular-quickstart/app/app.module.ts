import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent}      from './app.component';
import {ClickMeComponent} from './click-me.component';
import {keyUpComponent_v1} from './keyup.component';
import {keyUpComponent_v2} from './keyup2.component';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroListComponent} from './heroes/hero-list.component';

import {Logger} from './logger.service';

@NgModule({
  imports:[ 
    BrowserModule,
    FormsModule
   ],
  declarations:[
    AppComponent,
    ClickMeComponent,
    keyUpComponent_v1,
    keyUpComponent_v2,
    HeroFormComponent,
    HeroesComponent,
    HeroListComponent
    ],
    providers:[Logger],
  bootstrap:[AppComponent]
})
export class AppModule { }
