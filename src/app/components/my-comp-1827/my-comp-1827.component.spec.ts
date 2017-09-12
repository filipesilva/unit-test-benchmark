import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1827Component } from './my-comp-1827.component';

describe('MyComp1827Component', () => {
  let component: MyComp1827Component;
  let fixture: ComponentFixture<MyComp1827Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1827Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
