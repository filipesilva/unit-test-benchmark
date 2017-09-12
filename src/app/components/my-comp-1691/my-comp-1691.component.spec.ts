import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1691Component } from './my-comp-1691.component';

describe('MyComp1691Component', () => {
  let component: MyComp1691Component;
  let fixture: ComponentFixture<MyComp1691Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1691Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
