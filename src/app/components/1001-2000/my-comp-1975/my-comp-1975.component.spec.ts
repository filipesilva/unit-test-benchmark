import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1975Component } from './my-comp-1975.component';

describe('MyComp1975Component', () => {
  let component: MyComp1975Component;
  let fixture: ComponentFixture<MyComp1975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1975Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
