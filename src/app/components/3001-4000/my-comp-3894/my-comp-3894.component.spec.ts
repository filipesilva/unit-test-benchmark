import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3894Component } from './my-comp-3894.component';

describe('MyComp3894Component', () => {
  let component: MyComp3894Component;
  let fixture: ComponentFixture<MyComp3894Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3894Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
