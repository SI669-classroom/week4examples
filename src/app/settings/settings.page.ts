import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  firstName: string = "";
  lastName: string=""; 

  constructor(public storage: Storage) { 
    // this.firstName = localStorage.getItem('firstName');
    // this.lastName = localStorage.getItem('lastName');

    this.storage.get("data").then((data) => {
      this.firstName = data["firstName"];
      this.lastName = data["lastName"];
      console.log("got data " + data);
    });


  }

  ngOnInit() {
  }

  saveDataLocal() {
    localStorage.setItem('firstName', this.firstName);
    localStorage.setItem('lastName', this.lastName);
  }

  saveData() {
    let data = { "firstName": this.firstName,
                 "lastName": this.lastName };
    this.storage.set("data", data);
  }
}
