import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9186Component } from './my-comp-9186.component';

describe('MyComp9186Component', () => {
  let component: MyComp9186Component;
  let fixture: ComponentFixture<MyComp9186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9186Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
