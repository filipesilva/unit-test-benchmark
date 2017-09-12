import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7824Component } from './my-comp-7824.component';

describe('MyComp7824Component', () => {
  let component: MyComp7824Component;
  let fixture: ComponentFixture<MyComp7824Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7824Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
