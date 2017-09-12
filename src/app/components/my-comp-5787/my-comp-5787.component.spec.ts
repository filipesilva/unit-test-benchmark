import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5787Component } from './my-comp-5787.component';

describe('MyComp5787Component', () => {
  let component: MyComp5787Component;
  let fixture: ComponentFixture<MyComp5787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
