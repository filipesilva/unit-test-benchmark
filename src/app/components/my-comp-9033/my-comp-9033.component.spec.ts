import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9033Component } from './my-comp-9033.component';

describe('MyComp9033Component', () => {
  let component: MyComp9033Component;
  let fixture: ComponentFixture<MyComp9033Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9033Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
