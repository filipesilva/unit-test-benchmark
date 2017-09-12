import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1197Component } from './my-comp-1197.component';

describe('MyComp1197Component', () => {
  let component: MyComp1197Component;
  let fixture: ComponentFixture<MyComp1197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
