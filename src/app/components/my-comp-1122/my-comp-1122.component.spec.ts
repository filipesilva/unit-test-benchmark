import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1122Component } from './my-comp-1122.component';

describe('MyComp1122Component', () => {
  let component: MyComp1122Component;
  let fixture: ComponentFixture<MyComp1122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
