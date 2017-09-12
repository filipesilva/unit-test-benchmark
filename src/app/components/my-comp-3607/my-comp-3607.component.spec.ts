import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3607Component } from './my-comp-3607.component';

describe('MyComp3607Component', () => {
  let component: MyComp3607Component;
  let fixture: ComponentFixture<MyComp3607Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3607Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
