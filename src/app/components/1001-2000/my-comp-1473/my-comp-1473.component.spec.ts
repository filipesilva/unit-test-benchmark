import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1473Component } from './my-comp-1473.component';

describe('MyComp1473Component', () => {
  let component: MyComp1473Component;
  let fixture: ComponentFixture<MyComp1473Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1473Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
