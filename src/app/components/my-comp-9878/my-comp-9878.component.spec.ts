import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9878Component } from './my-comp-9878.component';

describe('MyComp9878Component', () => {
  let component: MyComp9878Component;
  let fixture: ComponentFixture<MyComp9878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9878Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
