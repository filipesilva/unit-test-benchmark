import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7695Component } from './my-comp-7695.component';

describe('MyComp7695Component', () => {
  let component: MyComp7695Component;
  let fixture: ComponentFixture<MyComp7695Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7695Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
