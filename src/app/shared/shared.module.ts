import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
  ]
})

export class SharedModule {}
