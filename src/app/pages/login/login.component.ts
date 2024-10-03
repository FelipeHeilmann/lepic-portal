import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public passwordVisibility: boolean = false

  public form: FormGroup

  constructor(private readonly formBuilder: FormBuilder, private readonly router: Router) {
    this.form = this.formBuilder.group({
      rm: [''],
      password: ['']
    })
  }

  public togglePasswordVisibility() {
    this.passwordVisibility = !this.passwordVisibility
  }

  public login(): void {
    this.router.navigate(["/menu"])
  }
}
