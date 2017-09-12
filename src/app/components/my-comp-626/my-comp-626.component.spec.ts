import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp626Component } from './my-comp-626.component';

describe('MyComp626Component', () => {
  let component: MyComp626Component;
  let fixture: ComponentFixture<MyComp626Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp626Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
