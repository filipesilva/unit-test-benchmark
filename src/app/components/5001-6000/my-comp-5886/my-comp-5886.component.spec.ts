import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5886Component } from './my-comp-5886.component';

describe('MyComp5886Component', () => {
  let component: MyComp5886Component;
  let fixture: ComponentFixture<MyComp5886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5886Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
