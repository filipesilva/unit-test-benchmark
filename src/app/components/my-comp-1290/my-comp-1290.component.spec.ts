import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1290Component } from './my-comp-1290.component';

describe('MyComp1290Component', () => {
  let component: MyComp1290Component;
  let fixture: ComponentFixture<MyComp1290Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1290Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
