import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1076Component } from './my-comp-1076.component';

describe('MyComp1076Component', () => {
  let component: MyComp1076Component;
  let fixture: ComponentFixture<MyComp1076Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1076Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1076Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
