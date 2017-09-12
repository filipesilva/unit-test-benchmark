import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2126Component } from './my-comp-2126.component';

describe('MyComp2126Component', () => {
  let component: MyComp2126Component;
  let fixture: ComponentFixture<MyComp2126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
