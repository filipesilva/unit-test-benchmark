import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp301Component } from './my-comp-301.component';

describe('MyComp301Component', () => {
  let component: MyComp301Component;
  let fixture: ComponentFixture<MyComp301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
