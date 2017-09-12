import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1899Component } from './my-comp-1899.component';

describe('MyComp1899Component', () => {
  let component: MyComp1899Component;
  let fixture: ComponentFixture<MyComp1899Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1899Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
