import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3941Component } from './my-comp-3941.component';

describe('MyComp3941Component', () => {
  let component: MyComp3941Component;
  let fixture: ComponentFixture<MyComp3941Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3941Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
