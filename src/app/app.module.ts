import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';
import { MAT_DATE_LOCALE,} from '@angular/material/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import localePt from '@angular/common/locales/pt';
import { ModalModule } from 'ngx-bootstrap/modal';

registerLocaleData(localePt);

@NgModule({
  declarations: [	
    AppComponent,
   ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule.forRoot(),
    RoutesModule,
    LayoutModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [ {provide:MAT_DATE_LOCALE, useValue: 'pt-Br'}, { provide: LOCALE_ID, useValue: 'pt-BR' }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
