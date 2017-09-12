import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9281Component } from './my-comp-9281.component';

describe('MyComp9281Component', () => {
  let component: MyComp9281Component;
  let fixture: ComponentFixture<MyComp9281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
