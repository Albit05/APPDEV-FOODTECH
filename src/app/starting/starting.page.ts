import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starting',
  templateUrl: './starting.page.html',
  styleUrls: ['./starting.page.scss'],
})
export class StartingPage implements OnInit {

  public progress = 0;

  constructor(private router: Router) {
    // Set the progress bar animation interval
    setInterval(() => {
      this.progress += 0.01;

      // Reset the progress bar when it reaches 100%
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
      }
    }, 50);

    // Delay navigation by 5 seconds (5000 milliseconds)
    setTimeout(() => {
      this.router.navigateByUrl('/admin-customer');
    }, 5000); // 5 seconds delay
  }


  ngOnInit() {
  }

}
