import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3943Component } from './my-comp-3943.component';

describe('MyComp3943Component', () => {
  let component: MyComp3943Component;
  let fixture: ComponentFixture<MyComp3943Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3943Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
