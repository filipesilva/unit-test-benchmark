import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1938Component } from './my-comp-1938.component';

describe('MyComp1938Component', () => {
  let component: MyComp1938Component;
  let fixture: ComponentFixture<MyComp1938Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1938Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
