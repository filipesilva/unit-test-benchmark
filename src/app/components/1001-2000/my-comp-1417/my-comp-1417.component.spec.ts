import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1417Component } from './my-comp-1417.component';

describe('MyComp1417Component', () => {
  let component: MyComp1417Component;
  let fixture: ComponentFixture<MyComp1417Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1417Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
