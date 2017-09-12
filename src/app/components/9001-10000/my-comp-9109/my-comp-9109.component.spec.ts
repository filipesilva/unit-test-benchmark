import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9109Component } from './my-comp-9109.component';

describe('MyComp9109Component', () => {
  let component: MyComp9109Component;
  let fixture: ComponentFixture<MyComp9109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9109Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
