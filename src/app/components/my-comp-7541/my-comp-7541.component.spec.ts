import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7541Component } from './my-comp-7541.component';

describe('MyComp7541Component', () => {
  let component: MyComp7541Component;
  let fixture: ComponentFixture<MyComp7541Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7541Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
