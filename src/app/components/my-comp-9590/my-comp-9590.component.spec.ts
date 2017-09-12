import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9590Component } from './my-comp-9590.component';

describe('MyComp9590Component', () => {
  let component: MyComp9590Component;
  let fixture: ComponentFixture<MyComp9590Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9590Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
