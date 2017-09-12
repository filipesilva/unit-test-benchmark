import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4549Component } from './my-comp-4549.component';

describe('MyComp4549Component', () => {
  let component: MyComp4549Component;
  let fixture: ComponentFixture<MyComp4549Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4549Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
