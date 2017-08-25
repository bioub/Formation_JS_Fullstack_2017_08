import { Component, OnInit } from '@angular/core';
import {Contact} from "../../../../common/models/contact";
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.css']
})
export class ContactsAddComponent implements OnInit {

  public contact: Contact = {
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
  };

  constructor(
    private http: Http,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ajouterContact() {
    this.http.post('/api/contacts', this.contact)
      .subscribe(() => {
        this.router.navigate(['/contacts/list'])
      })
  }
}
