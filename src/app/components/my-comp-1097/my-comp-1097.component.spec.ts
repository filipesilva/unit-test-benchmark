import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1097Component } from './my-comp-1097.component';

describe('MyComp1097Component', () => {
  let component: MyComp1097Component;
  let fixture: ComponentFixture<MyComp1097Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1097Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1097Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
