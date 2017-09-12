import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1917Component } from './my-comp-1917.component';

describe('MyComp1917Component', () => {
  let component: MyComp1917Component;
  let fixture: ComponentFixture<MyComp1917Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1917Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
