import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3596Component } from './my-comp-3596.component';

describe('MyComp3596Component', () => {
  let component: MyComp3596Component;
  let fixture: ComponentFixture<MyComp3596Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3596Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
