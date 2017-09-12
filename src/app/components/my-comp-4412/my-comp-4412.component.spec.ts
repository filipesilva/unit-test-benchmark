import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4412Component } from './my-comp-4412.component';

describe('MyComp4412Component', () => {
  let component: MyComp4412Component;
  let fixture: ComponentFixture<MyComp4412Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4412Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
