import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1343Component } from './my-comp-1343.component';

describe('MyComp1343Component', () => {
  let component: MyComp1343Component;
  let fixture: ComponentFixture<MyComp1343Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1343Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
