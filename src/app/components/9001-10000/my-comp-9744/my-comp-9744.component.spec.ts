import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9744Component } from './my-comp-9744.component';

describe('MyComp9744Component', () => {
  let component: MyComp9744Component;
  let fixture: ComponentFixture<MyComp9744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9744Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
