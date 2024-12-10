import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  // myForm: FormGroup;
  // constructor() {
  //   this.myForm = new FormGroup({
  //     name: new FormControl(''),
  //     email: new FormControl(''),
  //     phone: new FormControl(''),
  //   });
  // }
}
