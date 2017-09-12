import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4777Component } from './my-comp-4777.component';

describe('MyComp4777Component', () => {
  let component: MyComp4777Component;
  let fixture: ComponentFixture<MyComp4777Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4777Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
