import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3151Component } from './my-comp-3151.component';

describe('MyComp3151Component', () => {
  let component: MyComp3151Component;
  let fixture: ComponentFixture<MyComp3151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
