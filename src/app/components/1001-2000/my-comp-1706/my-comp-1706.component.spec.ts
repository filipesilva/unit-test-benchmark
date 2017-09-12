import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1706Component } from './my-comp-1706.component';

describe('MyComp1706Component', () => {
  let component: MyComp1706Component;
  let fixture: ComponentFixture<MyComp1706Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1706Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
