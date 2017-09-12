import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1395Component } from './my-comp-1395.component';

describe('MyComp1395Component', () => {
  let component: MyComp1395Component;
  let fixture: ComponentFixture<MyComp1395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1395Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
