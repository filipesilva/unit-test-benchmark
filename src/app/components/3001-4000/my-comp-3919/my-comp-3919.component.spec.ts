import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3919Component } from './my-comp-3919.component';

describe('MyComp3919Component', () => {
  let component: MyComp3919Component;
  let fixture: ComponentFixture<MyComp3919Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3919Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
