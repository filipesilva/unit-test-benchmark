import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1497Component } from './my-comp-1497.component';

describe('MyComp1497Component', () => {
  let component: MyComp1497Component;
  let fixture: ComponentFixture<MyComp1497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1497Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
