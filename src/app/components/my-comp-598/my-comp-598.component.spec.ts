import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp598Component } from './my-comp-598.component';

describe('MyComp598Component', () => {
  let component: MyComp598Component;
  let fixture: ComponentFixture<MyComp598Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp598Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
