import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3191Component } from './my-comp-3191.component';

describe('MyComp3191Component', () => {
  let component: MyComp3191Component;
  let fixture: ComponentFixture<MyComp3191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
