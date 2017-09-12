import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2479Component } from './my-comp-2479.component';

describe('MyComp2479Component', () => {
  let component: MyComp2479Component;
  let fixture: ComponentFixture<MyComp2479Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2479Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
