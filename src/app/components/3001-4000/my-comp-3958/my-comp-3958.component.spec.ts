import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3958Component } from './my-comp-3958.component';

describe('MyComp3958Component', () => {
  let component: MyComp3958Component;
  let fixture: ComponentFixture<MyComp3958Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3958Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
