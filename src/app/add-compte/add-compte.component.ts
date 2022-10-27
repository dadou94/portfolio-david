import { Component, OnInit, Input} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CompteService } from '../shared';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../shared/user';

@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrls: ['./add-compte.component.css']
})
export class AddCompteComponent implements OnInit {

  userForm: FormGroup;

  name: FormControl;
  firstname: FormControl;

  user: User;


  constructor(private formBuilder: FormBuilder,  private http: HttpClient,private route: ActivatedRoute,
  private router: Router,private ListService: CompteService) { 
  
  this.name = new FormControl("", [Validators.required, Validators.minLength(5)]),
  this.firstname = new FormControl("", [Validators.required]);

  this.userForm =  formBuilder.group({
            name: this.name,
            firstname: this.firstname 
          });
  }

  ngOnInit(): void {
  this.user = this.userForm.value;
  }


  onSubmit(formValue : any)
 {

    this.user = this.userForm.value;


    this.ListService.createUser(this.user).subscribe(user => this.user = user
        );
  
  console.log(this.user);
  }     
    
  }


