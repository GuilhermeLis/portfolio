import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
 private observa: Observable<Event>;
 showOff = false;
 @ViewChild('sidenav') sidenav: MatSidenav;

  ngOnInit() {

    console.log(window.innerWidth);

    // if (window.innerWidth < 935) { this.changeButton('show'); } else {this.changeButton('hide'); }

    // fromEvent(window, 'resize')
    // .pipe(
    //   tap(
    //     event => {
    //       // tslint:disable-next-line: no-string-literal
    //       const size = event.currentTarget['innerWidth'];
    //       if (size < 935) { this.changeButton('show');
    //       } else { this.changeButton('hide'); }
    //     }
    //   ) ).subscribe();
  }

  ngOnDestroy() {
  }

  changeButton(name: string) {
    if (name === 'show') { this.showOff = true; this.close(); }
    if (name === 'hide') { this.showOff = false; this.open(); }
  }

  open() {
    this.sidenav.open();
  }
  close() {
    this.sidenav.close();
  }
  toggle() {
    this.sidenav.toggle();
  }
}
