import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appDltForLoop]'
})
export class DltForLoopDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
  @Input('appDltForLoop') set loop(num: number) {
    for (let i = 0; i < num; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
