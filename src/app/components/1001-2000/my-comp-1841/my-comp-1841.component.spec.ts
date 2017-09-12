import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1841Component } from './my-comp-1841.component';

describe('MyComp1841Component', () => {
  let component: MyComp1841Component;
  let fixture: ComponentFixture<MyComp1841Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1841Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
