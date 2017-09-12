import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8867Component } from './my-comp-8867.component';

describe('MyComp8867Component', () => {
  let component: MyComp8867Component;
  let fixture: ComponentFixture<MyComp8867Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8867Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
