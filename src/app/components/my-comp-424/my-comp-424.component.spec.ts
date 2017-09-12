import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp424Component } from './my-comp-424.component';

describe('MyComp424Component', () => {
  let component: MyComp424Component;
  let fixture: ComponentFixture<MyComp424Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp424Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
