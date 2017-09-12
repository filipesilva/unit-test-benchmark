import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4863Component } from './my-comp-4863.component';

describe('MyComp4863Component', () => {
  let component: MyComp4863Component;
  let fixture: ComponentFixture<MyComp4863Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4863Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
