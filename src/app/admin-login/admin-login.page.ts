import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {
  username: string = "";
  password: string = "";

  constructor(private navCtrl: NavController, private loadingController: LoadingController) {}

  ngOnInit() {}

  async onSubmit(form: NgForm) { // Specify the type for the form parameter
    // Here you can add your login logic (e.g., API call)
    if (form.valid) {
      console.log('Username:', this.username);
      console.log('Password:', this.password);

      // Present loading indicator
    } else {
      console.log('Form is invalid');
    }
  }
}
