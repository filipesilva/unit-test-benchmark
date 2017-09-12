import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2848Component } from './my-comp-2848.component';

describe('MyComp2848Component', () => {
  let component: MyComp2848Component;
  let fixture: ComponentFixture<MyComp2848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2848Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
