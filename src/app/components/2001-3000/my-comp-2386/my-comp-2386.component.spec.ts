import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2386Component } from './my-comp-2386.component';

describe('MyComp2386Component', () => {
  let component: MyComp2386Component;
  let fixture: ComponentFixture<MyComp2386Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2386Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
