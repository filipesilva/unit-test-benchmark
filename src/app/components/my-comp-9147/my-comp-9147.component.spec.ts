import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9147Component } from './my-comp-9147.component';

describe('MyComp9147Component', () => {
  let component: MyComp9147Component;
  let fixture: ComponentFixture<MyComp9147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
