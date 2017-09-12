import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9738Component } from './my-comp-9738.component';

describe('MyComp9738Component', () => {
  let component: MyComp9738Component;
  let fixture: ComponentFixture<MyComp9738Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9738Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
