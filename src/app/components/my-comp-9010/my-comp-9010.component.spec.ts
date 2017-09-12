import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9010Component } from './my-comp-9010.component';

describe('MyComp9010Component', () => {
  let component: MyComp9010Component;
  let fixture: ComponentFixture<MyComp9010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
