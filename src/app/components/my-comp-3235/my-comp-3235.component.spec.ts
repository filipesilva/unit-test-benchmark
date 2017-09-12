import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3235Component } from './my-comp-3235.component';

describe('MyComp3235Component', () => {
  let component: MyComp3235Component;
  let fixture: ComponentFixture<MyComp3235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
