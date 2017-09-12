import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1296Component } from './my-comp-1296.component';

describe('MyComp1296Component', () => {
  let component: MyComp1296Component;
  let fixture: ComponentFixture<MyComp1296Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1296Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
