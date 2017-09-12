import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1483Component } from './my-comp-1483.component';

describe('MyComp1483Component', () => {
  let component: MyComp1483Component;
  let fixture: ComponentFixture<MyComp1483Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1483Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
