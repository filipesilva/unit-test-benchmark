import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7237Component } from './my-comp-7237.component';

describe('MyComp7237Component', () => {
  let component: MyComp7237Component;
  let fixture: ComponentFixture<MyComp7237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7237Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
