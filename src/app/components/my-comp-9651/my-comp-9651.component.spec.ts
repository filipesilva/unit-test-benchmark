import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9651Component } from './my-comp-9651.component';

describe('MyComp9651Component', () => {
  let component: MyComp9651Component;
  let fixture: ComponentFixture<MyComp9651Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9651Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
