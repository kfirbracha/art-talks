import { Component, Inject, OnInit } from '@angular/core';
import {
  DialogRole,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { iDialogData } from '../../interfaces/dialog';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss'],
})
export class GlobalErrorComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<GlobalErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: iDialogData
  ) {}

  ngOnInit(): void {}
}
