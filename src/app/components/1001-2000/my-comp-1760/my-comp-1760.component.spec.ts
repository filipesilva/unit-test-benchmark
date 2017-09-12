import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1760Component } from './my-comp-1760.component';

describe('MyComp1760Component', () => {
  let component: MyComp1760Component;
  let fixture: ComponentFixture<MyComp1760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1760Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
