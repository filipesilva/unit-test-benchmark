import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1980Component } from './my-comp-1980.component';

describe('MyComp1980Component', () => {
  let component: MyComp1980Component;
  let fixture: ComponentFixture<MyComp1980Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1980Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
