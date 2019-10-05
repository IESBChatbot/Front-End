import { 
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
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
        MatCardModule
    ],
    exports: [ 
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule
    ],
})

export class MaterialModule { }