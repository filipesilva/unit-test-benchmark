import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3824Component } from './my-comp-3824.component';

describe('MyComp3824Component', () => {
  let component: MyComp3824Component;
  let fixture: ComponentFixture<MyComp3824Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3824Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
