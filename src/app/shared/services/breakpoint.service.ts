import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  constructor(public breakpointObserver: BreakpointObserver) {}

  isMobile(): boolean {
    let isMobile: boolean;
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        isMobile = result.matches;
      }).unsubscribe();
    return isMobile;
  }
}
