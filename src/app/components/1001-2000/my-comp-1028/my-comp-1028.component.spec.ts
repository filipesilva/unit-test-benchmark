import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1028Component } from './my-comp-1028.component';

describe('MyComp1028Component', () => {
  let component: MyComp1028Component;
  let fixture: ComponentFixture<MyComp1028Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1028Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
