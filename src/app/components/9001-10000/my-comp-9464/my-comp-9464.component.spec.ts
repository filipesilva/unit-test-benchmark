import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9464Component } from './my-comp-9464.component';

describe('MyComp9464Component', () => {
  let component: MyComp9464Component;
  let fixture: ComponentFixture<MyComp9464Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9464Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
