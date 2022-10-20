import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteListComponent } from "./compte-list/compte-list.component";
import { EditCompteComponent } from "./edit-compte/edit-compte.component";
import { DeleteCompteComponent } from './delete-compte/delete-compte.component';
import { AddCompteComponent } from './add-compte/add-compte.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes = [


{ path: 'pageList', component: CompteListComponent },
{ path: 'edit/:id', component: EditCompteComponent },
{ path: 'delete/:id', component: DeleteCompteComponent },
{ path: 'add', component: AddCompteComponent },
{ path: 'home', component: HomeComponent },


{ path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
