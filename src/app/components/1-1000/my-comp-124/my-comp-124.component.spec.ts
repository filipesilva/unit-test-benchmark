import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp124Component } from './my-comp-124.component';

describe('MyComp124Component', () => {
  let component: MyComp124Component;
  let fixture: ComponentFixture<MyComp124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
