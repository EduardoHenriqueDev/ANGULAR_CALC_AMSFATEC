import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importando FormsModule

// Note que não é mais necessário declarar AppComponent aqui.
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: []
})
export class AppModule { }
