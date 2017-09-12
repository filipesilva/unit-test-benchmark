import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4707Component } from './my-comp-4707.component';

describe('MyComp4707Component', () => {
  let component: MyComp4707Component;
  let fixture: ComponentFixture<MyComp4707Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4707Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
