import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1438Component } from './my-comp-1438.component';

describe('MyComp1438Component', () => {
  let component: MyComp1438Component;
  let fixture: ComponentFixture<MyComp1438Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1438Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
