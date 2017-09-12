import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1625Component } from './my-comp-1625.component';

describe('MyComp1625Component', () => {
  let component: MyComp1625Component;
  let fixture: ComponentFixture<MyComp1625Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1625Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
