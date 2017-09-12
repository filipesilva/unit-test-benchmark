import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9654Component } from './my-comp-9654.component';

describe('MyComp9654Component', () => {
  let component: MyComp9654Component;
  let fixture: ComponentFixture<MyComp9654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
