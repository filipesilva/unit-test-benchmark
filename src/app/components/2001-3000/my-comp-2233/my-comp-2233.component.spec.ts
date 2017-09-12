import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2233Component } from './my-comp-2233.component';

describe('MyComp2233Component', () => {
  let component: MyComp2233Component;
  let fixture: ComponentFixture<MyComp2233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
