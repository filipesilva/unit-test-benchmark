import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2681Component } from './my-comp-2681.component';

describe('MyComp2681Component', () => {
  let component: MyComp2681Component;
  let fixture: ComponentFixture<MyComp2681Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2681Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
