import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    AccordionModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    CheckboxModule,
    InputNumberModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule
  ],
  exports: [
    AccordionModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    CheckboxModule,
    InputNumberModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule
  ]
})
export class PrimengModule { }
