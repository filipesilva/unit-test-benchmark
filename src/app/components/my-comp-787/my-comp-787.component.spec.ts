import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp787Component } from './my-comp-787.component';

describe('MyComp787Component', () => {
  let component: MyComp787Component;
  let fixture: ComponentFixture<MyComp787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
