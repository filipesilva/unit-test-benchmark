import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1641Component } from './my-comp-1641.component';

describe('MyComp1641Component', () => {
  let component: MyComp1641Component;
  let fixture: ComponentFixture<MyComp1641Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1641Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
