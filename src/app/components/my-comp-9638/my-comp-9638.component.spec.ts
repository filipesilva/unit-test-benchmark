import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9638Component } from './my-comp-9638.component';

describe('MyComp9638Component', () => {
  let component: MyComp9638Component;
  let fixture: ComponentFixture<MyComp9638Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9638Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
