import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9344Component } from './my-comp-9344.component';

describe('MyComp9344Component', () => {
  let component: MyComp9344Component;
  let fixture: ComponentFixture<MyComp9344Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9344Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
