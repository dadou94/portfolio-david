import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteListComponent } from "./compte-list/compte-list.component";
import { EditCompteComponent } from "./edit-compte/edit-compte.component";
import { DeleteCompteComponent } from './delete-compte/delete-compte.component';
import { AddCompteComponent } from './add-compte/add-compte.component';
import { ContactEditorComponent } from './contact-editor/contact-editor.component';


import { HomeComponent } from './home/home.component';

const routes: Routes = [


{ path: 'pageList', component: CompteListComponent },
{ path: 'edit/:id', component: EditCompteComponent },
{ path: 'delete/:id', component: DeleteCompteComponent },
{ path: 'add', component: AddCompteComponent },
{ path: 'home', component: HomeComponent },
{ path: 'contact', component: ContactEditorComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
