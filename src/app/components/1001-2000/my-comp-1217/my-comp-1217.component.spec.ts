import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1217Component } from './my-comp-1217.component';

describe('MyComp1217Component', () => {
  let component: MyComp1217Component;
  let fixture: ComponentFixture<MyComp1217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
