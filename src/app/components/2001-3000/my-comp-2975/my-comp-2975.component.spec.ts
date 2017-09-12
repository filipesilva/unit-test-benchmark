import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2975Component } from './my-comp-2975.component';

describe('MyComp2975Component', () => {
  let component: MyComp2975Component;
  let fixture: ComponentFixture<MyComp2975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2975Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
