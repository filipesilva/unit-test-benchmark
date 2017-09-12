import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1915Component } from './my-comp-1915.component';

describe('MyComp1915Component', () => {
  let component: MyComp1915Component;
  let fixture: ComponentFixture<MyComp1915Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1915Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
