import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CompteService } from '../shared';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../shared/user';

@Component({
  selector: 'app-edit-compte',
  templateUrl: './edit-compte.component.html',
  styleUrls: ['./edit-compte.component.css']
})
export class EditCompteComponent implements OnInit{

userForm: FormGroup;

name: FormControl;
firstname: FormControl;
Id: FormControl;

   user: User;


  constructor(private formBuilder: FormBuilder,  private http: HttpClient,private route: ActivatedRoute,
  private router: Router,private ListService: CompteService) { 
  
this.name = new FormControl("", [Validators.required, Validators.minLength(5)]);
       
  this.firstname = new FormControl("", [Validators.required]);

  this.Id = new FormControl("", [Validators.required]);

  this.userForm =  formBuilder.group({
            Id: this.Id,
            name: this.name,
            firstname: this.firstname 
          });



  }


  ngOnInit(): void {
  
    const id = this.route.snapshot.params['id'];
    this.route.queryParams.subscribe(params => { // get queryparams
      console.log(id);
     });

  this.refreshUser(id);
    
/* this.userForm.controls["Id"].setValue(this.user.Id );
 this.userForm.controls["firstname"].setValue(this.user.name );
  this.userForm.controls["name"].setValue(this.user.firstname);

   */


}

refreshUser(id: any) {
    this.ListService.getSelectUser(id)
                    .subscribe(
                    user => this.user = user);
  }

onSubmit(formValue : any){


      console.log(formValue);
    }

     saveForm() {



    this.user = this.userForm.value;

    const id = this.route.snapshot.params['id'];
    this.ListService.updateUser(this.user,id).subscribe(data => {
        console.log(data)
    //    this.refreshUser(id);
      });      
    console.log(this.user);
  }
}



