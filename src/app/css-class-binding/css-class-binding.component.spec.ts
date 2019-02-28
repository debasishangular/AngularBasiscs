import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssClassBindingComponent } from './css-class-binding.component';

describe('CssClassBindingComponent', () => {
  let component: CssClassBindingComponent;
  let fixture: ComponentFixture<CssClassBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssClassBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssClassBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
