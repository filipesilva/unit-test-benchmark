import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3081Component } from './my-comp-3081.component';

describe('MyComp3081Component', () => {
  let component: MyComp3081Component;
  let fixture: ComponentFixture<MyComp3081Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3081Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
