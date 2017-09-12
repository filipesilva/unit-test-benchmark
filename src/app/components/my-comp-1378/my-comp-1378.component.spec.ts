import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1378Component } from './my-comp-1378.component';

describe('MyComp1378Component', () => {
  let component: MyComp1378Component;
  let fixture: ComponentFixture<MyComp1378Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1378Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
