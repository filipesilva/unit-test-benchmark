import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3164Component } from './my-comp-3164.component';

describe('MyComp3164Component', () => {
  let component: MyComp3164Component;
  let fixture: ComponentFixture<MyComp3164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
