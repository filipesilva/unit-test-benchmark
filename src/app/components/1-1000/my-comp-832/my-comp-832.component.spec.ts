import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp832Component } from './my-comp-832.component';

describe('MyComp832Component', () => {
  let component: MyComp832Component;
  let fixture: ComponentFixture<MyComp832Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp832Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
