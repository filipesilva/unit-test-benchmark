import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1741Component } from './my-comp-1741.component';

describe('MyComp1741Component', () => {
  let component: MyComp1741Component;
  let fixture: ComponentFixture<MyComp1741Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1741Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
