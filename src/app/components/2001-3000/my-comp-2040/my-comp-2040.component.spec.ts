import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2040Component } from './my-comp-2040.component';

describe('MyComp2040Component', () => {
  let component: MyComp2040Component;
  let fixture: ComponentFixture<MyComp2040Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2040Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
