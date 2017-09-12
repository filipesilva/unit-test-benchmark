import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3677Component } from './my-comp-3677.component';

describe('MyComp3677Component', () => {
  let component: MyComp3677Component;
  let fixture: ComponentFixture<MyComp3677Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3677Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
