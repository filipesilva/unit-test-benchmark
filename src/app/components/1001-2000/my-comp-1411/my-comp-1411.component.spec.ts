import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1411Component } from './my-comp-1411.component';

describe('MyComp1411Component', () => {
  let component: MyComp1411Component;
  let fixture: ComponentFixture<MyComp1411Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1411Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
