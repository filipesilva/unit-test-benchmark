import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1424Component } from './my-comp-1424.component';

describe('MyComp1424Component', () => {
  let component: MyComp1424Component;
  let fixture: ComponentFixture<MyComp1424Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1424Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
