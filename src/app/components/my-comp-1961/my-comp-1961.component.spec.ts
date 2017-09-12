import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1961Component } from './my-comp-1961.component';

describe('MyComp1961Component', () => {
  let component: MyComp1961Component;
  let fixture: ComponentFixture<MyComp1961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1961Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
