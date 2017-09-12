import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2988Component } from './my-comp-2988.component';

describe('MyComp2988Component', () => {
  let component: MyComp2988Component;
  let fixture: ComponentFixture<MyComp2988Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2988Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
