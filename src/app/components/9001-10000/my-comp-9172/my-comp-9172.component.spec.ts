import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9172Component } from './my-comp-9172.component';

describe('MyComp9172Component', () => {
  let component: MyComp9172Component;
  let fixture: ComponentFixture<MyComp9172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
