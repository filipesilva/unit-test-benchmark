import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3926Component } from './my-comp-3926.component';

describe('MyComp3926Component', () => {
  let component: MyComp3926Component;
  let fixture: ComponentFixture<MyComp3926Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3926Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
