import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2323Component } from './my-comp-2323.component';

describe('MyComp2323Component', () => {
  let component: MyComp2323Component;
  let fixture: ComponentFixture<MyComp2323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2323Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
