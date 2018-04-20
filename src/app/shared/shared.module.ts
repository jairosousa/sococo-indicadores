import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    InputComponent
  ],
  declarations: [
    InputComponent
  ],
  entryComponents:[
    InputComponent
  ]
})
export class SharedModule { }
