import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-societes-show',
  templateUrl: './societes-show.component.html',
  styleUrls: ['./societes-show.component.css']
})
export class SocietesShowComponent implements OnInit {

  public societe;

  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.params
      .switchMap(params => this.http.get('/api/societes/' + params.id))
      .map((res: Response) => res.json())
      .subscribe(societe => this.societe = societe);
  }

}
