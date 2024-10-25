import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect, MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-selector',
  standalone: true,
  imports: [MatSelectModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './city-selector.component.html',
  styleUrl: './city-selector.component.scss'
})
export class CitySelectorComponent {
  cities = ["London", "Barcelona", "Copenhagen", "Rome", "Los Angeles", "Madrid", "New York", "Amsterdam", "Berlin", "Tokio"];

  cityControl!: FormControl;

  constructor(private router: Router) {}

  ngOnInit() {
    this.cityControl = new FormControl("");
    this.cityControl.valueChanges.subscribe((value) => {
      this.router.navigate([value]);
    });
  }

  ngOnDestroy() {}

}
