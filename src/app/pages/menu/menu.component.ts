import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public currentDate: Date = new Date()

  constructor(private readonly router: Router){}

  public navigate(url: string) {
    this.router.navigateByUrl(url)
  }
}
