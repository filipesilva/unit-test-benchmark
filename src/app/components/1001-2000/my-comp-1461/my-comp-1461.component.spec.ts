import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1461Component } from './my-comp-1461.component';

describe('MyComp1461Component', () => {
  let component: MyComp1461Component;
  let fixture: ComponentFixture<MyComp1461Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1461Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
