import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {ActivatedRoute} from "@angular/router";
import { Contact } from '../../../../common/models/contact';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.css']
})
export class ContactsShowComponent implements OnInit {

  public contact: Contact;

  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.params
      .switchMap(params => this.http.get('/api/contacts/' + params.id))
      .map((res: Response) => res.json())
      .subscribe(contact => this.contact = contact);
  }

}
