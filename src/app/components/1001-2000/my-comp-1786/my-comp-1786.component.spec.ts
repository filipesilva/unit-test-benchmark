import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1786Component } from './my-comp-1786.component';

describe('MyComp1786Component', () => {
  let component: MyComp1786Component;
  let fixture: ComponentFixture<MyComp1786Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1786Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
