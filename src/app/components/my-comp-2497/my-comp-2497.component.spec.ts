import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2497Component } from './my-comp-2497.component';

describe('MyComp2497Component', () => {
  let component: MyComp2497Component;
  let fixture: ComponentFixture<MyComp2497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2497Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
