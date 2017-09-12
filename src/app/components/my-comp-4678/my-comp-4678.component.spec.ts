import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4678Component } from './my-comp-4678.component';

describe('MyComp4678Component', () => {
  let component: MyComp4678Component;
  let fixture: ComponentFixture<MyComp4678Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4678Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
