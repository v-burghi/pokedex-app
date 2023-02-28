import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DexComponent } from './components/dex/dex.component';
import { NoPrimeDexComponent } from './components/no-prime-dex/no-prime-dex.component';

const routes: Routes = [
  {path: 'dex', component: DexComponent},
  {path: 'no-prime-dex', component: NoPrimeDexComponent},
  {path: '', redirectTo: 'no-prime-dex', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
