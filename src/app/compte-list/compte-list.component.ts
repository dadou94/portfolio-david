import { Component, OnInit, Input } from '@angular/core';
import { CompteService } from '../shared';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',
  styleUrls: ['./compte-list.component.css'],
  providers: [CompteService]
})
export class CompteListComponent implements OnInit {

  constructor(private ListService: CompteService,private route: ActivatedRoute) { }



private user: any;
selectedId: number;

@Input() id: string; 

public comptes: any;



  ngOnInit() {
  	this.ListService.getAll().subscribe(
  		data => {
  			this.comptes = data;
  		},
  		error => console.log(error)
  	);

   

 

}
}
