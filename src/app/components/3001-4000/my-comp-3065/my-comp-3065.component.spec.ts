import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3065Component } from './my-comp-3065.component';

describe('MyComp3065Component', () => {
  let component: MyComp3065Component;
  let fixture: ComponentFixture<MyComp3065Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3065Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3065Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
