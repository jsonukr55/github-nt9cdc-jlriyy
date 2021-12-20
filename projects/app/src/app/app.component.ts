import { Component, ElementRef, ViewChild } from '@angular/core';

import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent,
  PerfectScrollbarDirective,
} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'my-app',
  moduleId: 'src/app/app.component',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  public type: string = 'component';

  public disabled: boolean = false;

  public config: PerfectScrollbarConfigInterface = {};

  @ViewChild(PerfectScrollbarComponent, { static: false })
  componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective, { static: false })
  directiveRef?: PerfectScrollbarDirective;

  constructor(public eleRef: ElementRef) {}
  ngOnInit() {
    this.scrollToElement();
  }

  public toggleType(): void {
    this.type = this.type === 'component' ? 'directive' : 'component';
  }

  public toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  public scrollToXY(x: number, y: number): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.scrollTo(x, y, 500);
    } else if (
      this.type === 'component' &&
      this.componentRef &&
      this.componentRef.directiveRef
    ) {
      this.componentRef.directiveRef.scrollTo(x, y, 500);
    }
  }

  public scrollToElement1(): void {
    this.componentRef.directiveRef.scrollToElement('.highlightedRow', 0, 1000);
  }

  public scrollToTop(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.scrollToTop();
    } else if (
      this.type === 'component' &&
      this.componentRef &&
      this.componentRef.directiveRef
    ) {
      this.componentRef.directiveRef.scrollToTop();
    }
  }

  public scrollToLeft(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.scrollToLeft();
    } else if (
      this.type === 'component' &&
      this.componentRef &&
      this.componentRef.directiveRef
    ) {
      this.componentRef.directiveRef.scrollToLeft();
    }
  }

  public scrollToRight(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.scrollToRight();
    } else if (
      this.type === 'component' &&
      this.componentRef &&
      this.componentRef.directiveRef
    ) {
      this.componentRef.directiveRef.scrollToRight();
    }
  }

  public scrollToBottom(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.scrollToBottom();
    } else if (
      this.type === 'component' &&
      this.componentRef &&
      this.componentRef.directiveRef
    ) {
      this.componentRef.directiveRef.scrollToBottom();
    }
  }

  public scrollToElement(
    element = this.eleRef.nativeElement.querySelector('.highlightedRow'),
    offset = 100,
    speed = 1000
  ) {
    // if (this.type === 'directive' && this.directiveRef) {
    //   this.directiveRef.scrollToElement('.highlightedRow', 100, 1000);
    // } else if (
    //   this.type === 'component' &&
    //   this.componentRef &&
    //   this.componentRef.directiveRef
    // ) {
    //   this.componentRef.directiveRef.scrollToElement(
    //     '.highlightedRow',
    //     100,
    //     1000
    //   );
    // }
  }

  public onScrollEvent(event: any): void {
    console.log(event);
  }
}
