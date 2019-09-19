import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    LoginModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
