import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-societes-list',
  templateUrl: './societes-list.component.html',
  styleUrls: ['./societes-list.component.css']
})
export class SocietesListComponent implements OnInit {

  public societes = [];

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    this.http.get('/api/societes')
      .subscribe((res: Response) => {
        if (res.status === 200) {
          this.societes = res.json();
        }
      });
  }

}
