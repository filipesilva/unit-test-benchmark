import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2897Component } from './my-comp-2897.component';

describe('MyComp2897Component', () => {
  let component: MyComp2897Component;
  let fixture: ComponentFixture<MyComp2897Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2897Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
