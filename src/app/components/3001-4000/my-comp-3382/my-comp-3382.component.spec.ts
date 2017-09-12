import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3382Component } from './my-comp-3382.component';

describe('MyComp3382Component', () => {
  let component: MyComp3382Component;
  let fixture: ComponentFixture<MyComp3382Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3382Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
