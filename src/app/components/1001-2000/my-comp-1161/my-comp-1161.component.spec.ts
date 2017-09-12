import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1161Component } from './my-comp-1161.component';

describe('MyComp1161Component', () => {
  let component: MyComp1161Component;
  let fixture: ComponentFixture<MyComp1161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
