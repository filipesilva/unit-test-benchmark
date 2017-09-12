import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1943Component } from './my-comp-1943.component';

describe('MyComp1943Component', () => {
  let component: MyComp1943Component;
  let fixture: ComponentFixture<MyComp1943Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1943Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
