import { Component, OnInit, Inject } from '@angular/core';
import { CompteService } from '../shared';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../shared/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-delete-compte',
  templateUrl: './delete-compte.component.html',
  styleUrls: ['./delete-compte.component.css']
})
export class DeleteCompteComponent implements OnInit {

  constructor(private http: HttpClient,private route: ActivatedRoute,
  private router: Router,private ListService: CompteService) { 
  
  }

  ngOnInit(): void {

   const id = this.route.snapshot.params['id'];
    this.ListService.deleteUser(id).subscribe(data => {
        console.log(id+": supprimer");
    //    this.refreshUser(id);
      });      
   // console.log(this.user);

    }

}
