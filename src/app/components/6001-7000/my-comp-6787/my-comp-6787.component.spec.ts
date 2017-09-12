import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6787Component } from './my-comp-6787.component';

describe('MyComp6787Component', () => {
  let component: MyComp6787Component;
  let fixture: ComponentFixture<MyComp6787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
