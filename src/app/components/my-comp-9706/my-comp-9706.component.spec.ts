import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9706Component } from './my-comp-9706.component';

describe('MyComp9706Component', () => {
  let component: MyComp9706Component;
  let fixture: ComponentFixture<MyComp9706Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9706Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
