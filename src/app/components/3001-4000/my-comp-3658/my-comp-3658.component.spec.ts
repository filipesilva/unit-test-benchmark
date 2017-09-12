import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3658Component } from './my-comp-3658.component';

describe('MyComp3658Component', () => {
  let component: MyComp3658Component;
  let fixture: ComponentFixture<MyComp3658Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3658Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
