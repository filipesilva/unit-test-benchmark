import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7802Component } from './my-comp-7802.component';

describe('MyComp7802Component', () => {
  let component: MyComp7802Component;
  let fixture: ComponentFixture<MyComp7802Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7802Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
