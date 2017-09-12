import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3815Component } from './my-comp-3815.component';

describe('MyComp3815Component', () => {
  let component: MyComp3815Component;
  let fixture: ComponentFixture<MyComp3815Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3815Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
