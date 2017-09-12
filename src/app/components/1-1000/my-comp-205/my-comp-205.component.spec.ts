import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp205Component } from './my-comp-205.component';

describe('MyComp205Component', () => {
  let component: MyComp205Component;
  let fixture: ComponentFixture<MyComp205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
