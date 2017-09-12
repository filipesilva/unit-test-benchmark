import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4558Component } from './my-comp-4558.component';

describe('MyComp4558Component', () => {
  let component: MyComp4558Component;
  let fixture: ComponentFixture<MyComp4558Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4558Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
