import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1930Component } from './my-comp-1930.component';

describe('MyComp1930Component', () => {
  let component: MyComp1930Component;
  let fixture: ComponentFixture<MyComp1930Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1930Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
