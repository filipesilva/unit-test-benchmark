import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7215Component } from './my-comp-7215.component';

describe('MyComp7215Component', () => {
  let component: MyComp7215Component;
  let fixture: ComponentFixture<MyComp7215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
