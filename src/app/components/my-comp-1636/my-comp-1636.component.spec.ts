import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1636Component } from './my-comp-1636.component';

describe('MyComp1636Component', () => {
  let component: MyComp1636Component;
  let fixture: ComponentFixture<MyComp1636Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1636Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
