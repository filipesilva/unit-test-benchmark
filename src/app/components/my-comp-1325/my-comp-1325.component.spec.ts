import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1325Component } from './my-comp-1325.component';

describe('MyComp1325Component', () => {
  let component: MyComp1325Component;
  let fixture: ComponentFixture<MyComp1325Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1325Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
