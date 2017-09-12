import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3609Component } from './my-comp-3609.component';

describe('MyComp3609Component', () => {
  let component: MyComp3609Component;
  let fixture: ComponentFixture<MyComp3609Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3609Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
