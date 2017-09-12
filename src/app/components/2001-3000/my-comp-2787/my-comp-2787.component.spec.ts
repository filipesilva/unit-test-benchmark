import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2787Component } from './my-comp-2787.component';

describe('MyComp2787Component', () => {
  let component: MyComp2787Component;
  let fixture: ComponentFixture<MyComp2787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
