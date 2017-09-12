import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2028Component } from './my-comp-2028.component';

describe('MyComp2028Component', () => {
  let component: MyComp2028Component;
  let fixture: ComponentFixture<MyComp2028Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2028Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
