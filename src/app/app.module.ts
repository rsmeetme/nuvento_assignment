import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminModule } from './admin/admin.module';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppState } from './store/globel/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CanLoadAuthGuard } from './auth/user-auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    InputTextModule,
    ReactiveFormsModule,
    InputMaskModule,
    ButtonModule,
    CardModule,
    StoreModule.forRoot(AppState),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [CanLoadAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
