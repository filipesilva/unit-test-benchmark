import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9400Component } from './my-comp-9400.component';

describe('MyComp9400Component', () => {
  let component: MyComp9400Component;
  let fixture: ComponentFixture<MyComp9400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
