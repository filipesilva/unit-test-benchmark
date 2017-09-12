import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1513Component } from './my-comp-1513.component';

describe('MyComp1513Component', () => {
  let component: MyComp1513Component;
  let fixture: ComponentFixture<MyComp1513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1513Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
