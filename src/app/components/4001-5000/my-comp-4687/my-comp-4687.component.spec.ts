import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4687Component } from './my-comp-4687.component';

describe('MyComp4687Component', () => {
  let component: MyComp4687Component;
  let fixture: ComponentFixture<MyComp4687Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4687Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
