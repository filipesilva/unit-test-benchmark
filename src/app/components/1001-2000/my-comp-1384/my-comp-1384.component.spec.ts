import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1384Component } from './my-comp-1384.component';

describe('MyComp1384Component', () => {
  let component: MyComp1384Component;
  let fixture: ComponentFixture<MyComp1384Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1384Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
