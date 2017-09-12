import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1734Component } from './my-comp-1734.component';

describe('MyComp1734Component', () => {
  let component: MyComp1734Component;
  let fixture: ComponentFixture<MyComp1734Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1734Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
