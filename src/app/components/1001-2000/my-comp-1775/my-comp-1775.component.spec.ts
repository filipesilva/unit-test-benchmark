import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1775Component } from './my-comp-1775.component';

describe('MyComp1775Component', () => {
  let component: MyComp1775Component;
  let fixture: ComponentFixture<MyComp1775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1775Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
