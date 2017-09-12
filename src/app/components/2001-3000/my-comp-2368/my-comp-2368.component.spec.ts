import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2368Component } from './my-comp-2368.component';

describe('MyComp2368Component', () => {
  let component: MyComp2368Component;
  let fixture: ComponentFixture<MyComp2368Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2368Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
