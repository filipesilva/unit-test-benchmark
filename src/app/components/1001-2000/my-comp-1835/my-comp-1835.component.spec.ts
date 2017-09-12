import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1835Component } from './my-comp-1835.component';

describe('MyComp1835Component', () => {
  let component: MyComp1835Component;
  let fixture: ComponentFixture<MyComp1835Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1835Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
