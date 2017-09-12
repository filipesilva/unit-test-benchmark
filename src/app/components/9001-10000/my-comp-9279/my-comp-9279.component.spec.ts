import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9279Component } from './my-comp-9279.component';

describe('MyComp9279Component', () => {
  let component: MyComp9279Component;
  let fixture: ComponentFixture<MyComp9279Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9279Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
