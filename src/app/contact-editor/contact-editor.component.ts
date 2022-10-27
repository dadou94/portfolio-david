import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CompteService } from '../shared';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../shared/user';



@Component({
  selector: 'app-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.css'],
  providers: [CompteService]
})
export class ContactEditorComponent implements OnInit {

user:User;
contactForm: FormGroup;
shapes: Array<object>;
submitted = false;

Data: Array<any> = [
  { name: 'Site Vitrine', value: 'Site Vitrine' },
  { name: 'Site e-commerce', value: 'Site e-commerce' },
  { name: "Refonte d'application", value: "Refonte d'application" }];

  constructor(private fb: FormBuilder,  private http: HttpClient,private route: ActivatedRoute,
    private router: Router,private ListService: CompteService) { 
    
      this.contactForm = this.fb.group({

        firstName: new FormControl('',[
          Validators.required,
          Validators.minLength(4) ]),
        lastName:  new FormControl('',[Validators.required]),
        email:  new FormControl('',[Validators.required]),
        typeProjet:  this.fb.array([]),
        descriptionProjet: new FormControl('')
      });
    
}
  


    
    onCheckboxChange(event: any) {
    
      
      const typeProjet = (this.contactForm.controls['typeProjet'] as FormArray);
      if (event.target.checked) {
        typeProjet.push(new FormControl(event.target.value));
      } else {
        const index = typeProjet.controls
        .findIndex(x => x.value === event.target.value);
        typeProjet.removeAt(index);
      }
    }

    ngOnInit(): void {
      this.user = this.contactForm.value;
      }
    
    onSubmit(formValue : any)
   {
   
    
    this.contactForm = this.fb.group({

      firstName: this.contactForm.value.firstName,
      lastName:  this.contactForm.value.lastName,
      email:  this.contactForm.value.email,
      typeProjet:  this.contactForm.value.typeProjet.toString(),
      descriptionProjet: this.contactForm.value.descriptionProjet
    });
      
    this.user = this.contactForm.value;

      this.ListService.createUser(this.user).subscribe(user => this.user = user);
      this.submitted = true;
      alert("Demande bien enregistré!");
      this.refreshPage();

    }     
    refreshPage() {
      window.location.reload();
     }

}
