import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7365Component } from './my-comp-7365.component';

describe('MyComp7365Component', () => {
  let component: MyComp7365Component;
  let fixture: ComponentFixture<MyComp7365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
