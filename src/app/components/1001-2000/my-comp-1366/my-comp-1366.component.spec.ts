import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1366Component } from './my-comp-1366.component';

describe('MyComp1366Component', () => {
  let component: MyComp1366Component;
  let fixture: ComponentFixture<MyComp1366Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1366Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
