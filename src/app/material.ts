import {
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule,
    MatTableModule
} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatDialogModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatDividerModule,
        MatMenuModule,
        MatTableModule
    ],
    exports: [
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatDividerModule,
        MatMenuModule,
        MatTableModule
    ],
})

export class MaterialModule { }