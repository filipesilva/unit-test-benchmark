import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3534Component } from './my-comp-3534.component';

describe('MyComp3534Component', () => {
  let component: MyComp3534Component;
  let fixture: ComponentFixture<MyComp3534Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3534Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
