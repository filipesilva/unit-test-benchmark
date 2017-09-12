import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1350Component } from './my-comp-1350.component';

describe('MyComp1350Component', () => {
  let component: MyComp1350Component;
  let fixture: ComponentFixture<MyComp1350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
