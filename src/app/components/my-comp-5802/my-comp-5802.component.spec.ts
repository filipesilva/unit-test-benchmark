import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5802Component } from './my-comp-5802.component';

describe('MyComp5802Component', () => {
  let component: MyComp5802Component;
  let fixture: ComponentFixture<MyComp5802Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5802Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
