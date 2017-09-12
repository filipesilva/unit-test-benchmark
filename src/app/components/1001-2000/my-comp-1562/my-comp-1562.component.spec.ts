import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1562Component } from './my-comp-1562.component';

describe('MyComp1562Component', () => {
  let component: MyComp1562Component;
  let fixture: ComponentFixture<MyComp1562Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1562Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
