import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1463Component } from './my-comp-1463.component';

describe('MyComp1463Component', () => {
  let component: MyComp1463Component;
  let fixture: ComponentFixture<MyComp1463Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1463Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
