import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9312Component } from './my-comp-9312.component';

describe('MyComp9312Component', () => {
  let component: MyComp9312Component;
  let fixture: ComponentFixture<MyComp9312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9312Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
