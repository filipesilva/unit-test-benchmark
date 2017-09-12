import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1349Component } from './my-comp-1349.component';

describe('MyComp1349Component', () => {
  let component: MyComp1349Component;
  let fixture: ComponentFixture<MyComp1349Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1349Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
