import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1937Component } from './my-comp-1937.component';

describe('MyComp1937Component', () => {
  let component: MyComp1937Component;
  let fixture: ComponentFixture<MyComp1937Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1937Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
