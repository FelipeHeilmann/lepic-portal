import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private readonly router: Router){}

  public navigate(url: string) {
    this.router.navigateByUrl(url)
  }
}
