import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9347Component } from './my-comp-9347.component';

describe('MyComp9347Component', () => {
  let component: MyComp9347Component;
  let fixture: ComponentFixture<MyComp9347Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9347Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
