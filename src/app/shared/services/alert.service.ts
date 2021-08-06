import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) {}

  show(text: string, delay: number): void {
    this.snackBar.open(text, 'закрыть', { duration: delay});
  }
}
