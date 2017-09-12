import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4327Component } from './my-comp-4327.component';

describe('MyComp4327Component', () => {
  let component: MyComp4327Component;
  let fixture: ComponentFixture<MyComp4327Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4327Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
