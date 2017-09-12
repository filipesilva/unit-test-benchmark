import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2455Component } from './my-comp-2455.component';

describe('MyComp2455Component', () => {
  let component: MyComp2455Component;
  let fixture: ComponentFixture<MyComp2455Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2455Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
