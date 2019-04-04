import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCheckboxModule, MatChipsModule,
  MatDatepickerModule, MatExpansionModule,
  MatMenuModule,
  MatNativeDateModule, MatPaginatorModule, MatSnackBarModule, MatTableModule
} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatChipsModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatSelectModule


  ],
  exports : [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatChipsModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
