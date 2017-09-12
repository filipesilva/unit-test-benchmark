import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4425Component } from './my-comp-4425.component';

describe('MyComp4425Component', () => {
  let component: MyComp4425Component;
  let fixture: ComponentFixture<MyComp4425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4425Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
