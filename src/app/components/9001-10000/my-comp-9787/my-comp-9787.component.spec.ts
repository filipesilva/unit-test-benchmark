import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9787Component } from './my-comp-9787.component';

describe('MyComp9787Component', () => {
  let component: MyComp9787Component;
  let fixture: ComponentFixture<MyComp9787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
