import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8470Component } from './my-comp-8470.component';

describe('MyComp8470Component', () => {
  let component: MyComp8470Component;
  let fixture: ComponentFixture<MyComp8470Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8470Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
