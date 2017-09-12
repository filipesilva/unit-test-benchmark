import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9797Component } from './my-comp-9797.component';

describe('MyComp9797Component', () => {
  let component: MyComp9797Component;
  let fixture: ComponentFixture<MyComp9797Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9797Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
