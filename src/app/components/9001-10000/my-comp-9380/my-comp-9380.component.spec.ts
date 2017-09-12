import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9380Component } from './my-comp-9380.component';

describe('MyComp9380Component', () => {
  let component: MyComp9380Component;
  let fixture: ComponentFixture<MyComp9380Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9380Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
