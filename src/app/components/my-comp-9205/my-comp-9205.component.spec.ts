import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9205Component } from './my-comp-9205.component';

describe('MyComp9205Component', () => {
  let component: MyComp9205Component;
  let fixture: ComponentFixture<MyComp9205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
