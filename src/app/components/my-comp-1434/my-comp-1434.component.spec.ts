import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1434Component } from './my-comp-1434.component';

describe('MyComp1434Component', () => {
  let component: MyComp1434Component;
  let fixture: ComponentFixture<MyComp1434Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1434Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
