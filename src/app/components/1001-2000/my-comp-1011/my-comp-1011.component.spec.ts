import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1011Component } from './my-comp-1011.component';

describe('MyComp1011Component', () => {
  let component: MyComp1011Component;
  let fixture: ComponentFixture<MyComp1011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
