import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1455Component } from './my-comp-1455.component';

describe('MyComp1455Component', () => {
  let component: MyComp1455Component;
  let fixture: ComponentFixture<MyComp1455Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1455Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
