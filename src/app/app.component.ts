import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

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

    fromEvent(window, 'resize')
    .pipe(
      tap(
        event => {
          // tslint:disable-next-line: no-string-literal
          const size = event.currentTarget['innerWidth'];
          if (size < 935) { this.close(); this.showOff = true;
          } else { this.open(); this.showOff = false; }
        }
      ) ).subscribe();
  }

  ngOnDestroy() {
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
