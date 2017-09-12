import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2930Component } from './my-comp-2930.component';

describe('MyComp2930Component', () => {
  let component: MyComp2930Component;
  let fixture: ComponentFixture<MyComp2930Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2930Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
