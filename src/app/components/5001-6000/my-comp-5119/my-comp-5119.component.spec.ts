import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5119Component } from './my-comp-5119.component';

describe('MyComp5119Component', () => {
  let component: MyComp5119Component;
  let fixture: ComponentFixture<MyComp5119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
