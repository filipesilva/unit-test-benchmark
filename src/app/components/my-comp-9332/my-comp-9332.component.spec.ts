import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9332Component } from './my-comp-9332.component';

describe('MyComp9332Component', () => {
  let component: MyComp9332Component;
  let fixture: ComponentFixture<MyComp9332Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9332Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
