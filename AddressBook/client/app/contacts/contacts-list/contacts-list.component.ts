import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../../common/models/contact';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  public contacts: Array<Contact>;

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http.get('/api/contacts')
      .map((res: Response) => res.json())
      .subscribe(contacts => this.contacts = contacts)
  }

  supprimerContact(contact: Contact) {
    this.http.delete('/api/contacts/' + contact._id)
      .subscribe(() => {
        const i = this.contacts.indexOf(contact);
        this.contacts.splice(i, 1);
      });
  }

}
