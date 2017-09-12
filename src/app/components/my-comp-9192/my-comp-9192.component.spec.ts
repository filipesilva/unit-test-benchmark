import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9192Component } from './my-comp-9192.component';

describe('MyComp9192Component', () => {
  let component: MyComp9192Component;
  let fixture: ComponentFixture<MyComp9192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
