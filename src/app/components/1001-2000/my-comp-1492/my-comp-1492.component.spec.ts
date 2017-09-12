import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1492Component } from './my-comp-1492.component';

describe('MyComp1492Component', () => {
  let component: MyComp1492Component;
  let fixture: ComponentFixture<MyComp1492Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1492Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
