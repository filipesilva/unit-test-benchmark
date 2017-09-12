import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1793Component } from './my-comp-1793.component';

describe('MyComp1793Component', () => {
  let component: MyComp1793Component;
  let fixture: ComponentFixture<MyComp1793Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1793Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
