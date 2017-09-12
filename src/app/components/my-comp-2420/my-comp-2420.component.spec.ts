import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2420Component } from './my-comp-2420.component';

describe('MyComp2420Component', () => {
  let component: MyComp2420Component;
  let fixture: ComponentFixture<MyComp2420Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2420Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
