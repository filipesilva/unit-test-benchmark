import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3123Component } from './my-comp-3123.component';

describe('MyComp3123Component', () => {
  let component: MyComp3123Component;
  let fixture: ComponentFixture<MyComp3123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
