import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7236Component } from './my-comp-7236.component';

describe('MyComp7236Component', () => {
  let component: MyComp7236Component;
  let fixture: ComponentFixture<MyComp7236Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7236Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
