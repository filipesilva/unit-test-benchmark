import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1683Component } from './my-comp-1683.component';

describe('MyComp1683Component', () => {
  let component: MyComp1683Component;
  let fixture: ComponentFixture<MyComp1683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1683Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
