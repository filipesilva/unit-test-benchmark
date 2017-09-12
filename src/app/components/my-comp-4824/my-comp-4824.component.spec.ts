import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4824Component } from './my-comp-4824.component';

describe('MyComp4824Component', () => {
  let component: MyComp4824Component;
  let fixture: ComponentFixture<MyComp4824Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4824Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
