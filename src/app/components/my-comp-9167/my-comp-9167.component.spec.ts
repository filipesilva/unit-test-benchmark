import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9167Component } from './my-comp-9167.component';

describe('MyComp9167Component', () => {
  let component: MyComp9167Component;
  let fixture: ComponentFixture<MyComp9167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
