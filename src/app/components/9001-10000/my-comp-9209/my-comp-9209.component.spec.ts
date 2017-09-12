import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9209Component } from './my-comp-9209.component';

describe('MyComp9209Component', () => {
  let component: MyComp9209Component;
  let fixture: ComponentFixture<MyComp9209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9209Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
