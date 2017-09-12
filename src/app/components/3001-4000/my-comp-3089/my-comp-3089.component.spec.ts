import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3089Component } from './my-comp-3089.component';

describe('MyComp3089Component', () => {
  let component: MyComp3089Component;
  let fixture: ComponentFixture<MyComp3089Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3089Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3089Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
