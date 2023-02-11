import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { DialogComponent } from './dialog/dialog.component';
import { DividerComponent } from './divider/divider.component';
import { ExpansionpanelComponent } from './expansionpanel/expansionpanel.component';
import { FormfieldComponent } from './formfield/formfield.component';
import { MatgridComponent } from './matgrid/matgrid.component';

const routes: Routes = [
  {path: '', component:AutocompleteComponent},
  {path: 'autocomplete', component:AutocompleteComponent},
  {path: 'chips', component:ChipsComponent},
  {path: 'dialog', component:DialogComponent},
  {path: 'button', component:ButtonComponent},
  {path: 'button-toggle', component:ButtonToggleComponent},
  {path: 'card', component:CardComponent},
  {path: 'formfield', component:FormfieldComponent},
  {path: 'matgrid', component:MatgridComponent},
  {path: 'checkbox', component:CheckboxComponent},
  {path: 'divider', component:DividerComponent},
  {path: 'expansionpanel', component:ExpansionpanelComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
