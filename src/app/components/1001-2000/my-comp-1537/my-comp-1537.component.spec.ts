import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1537Component } from './my-comp-1537.component';

describe('MyComp1537Component', () => {
  let component: MyComp1537Component;
  let fixture: ComponentFixture<MyComp1537Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1537Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
