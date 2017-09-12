import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9286Component } from './my-comp-9286.component';

describe('MyComp9286Component', () => {
  let component: MyComp9286Component;
  let fixture: ComponentFixture<MyComp9286Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9286Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
