import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1385Component } from './my-comp-1385.component';

describe('MyComp1385Component', () => {
  let component: MyComp1385Component;
  let fixture: ComponentFixture<MyComp1385Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1385Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
