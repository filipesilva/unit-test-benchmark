import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1881Component } from './my-comp-1881.component';

describe('MyComp1881Component', () => {
  let component: MyComp1881Component;
  let fixture: ComponentFixture<MyComp1881Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1881Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
