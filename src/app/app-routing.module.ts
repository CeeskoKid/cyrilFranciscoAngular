import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DinosaursComponent} from './component/dinosaurs/dinosaurs.component';
import {AddDinosaurComponent} from './add-dinosaur/add-dinosaur.component';

const routes: Routes = [
  {path: '', redirectTo: 'dinosaurs', pathMatch: 'full'},
  {path: 'dinosaurs', component: DinosaursComponent},
  {path: 'dinosaur', component: AddDinosaurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
