import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9724Component } from './my-comp-9724.component';

describe('MyComp9724Component', () => {
  let component: MyComp9724Component;
  let fixture: ComponentFixture<MyComp9724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
