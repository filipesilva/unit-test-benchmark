import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3715Component } from './my-comp-3715.component';

describe('MyComp3715Component', () => {
  let component: MyComp3715Component;
  let fixture: ComponentFixture<MyComp3715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
