import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  firstName: string = "";
  lastName: string=""; 

  constructor() { 
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');
  }

  ngOnInit() {
  }

  saveData() {
    localStorage.setItem('firstName', this.firstName);
    localStorage.setItem('lastName', this.lastName);
  }
}
