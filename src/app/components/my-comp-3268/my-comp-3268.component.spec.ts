import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3268Component } from './my-comp-3268.component';

describe('MyComp3268Component', () => {
  let component: MyComp3268Component;
  let fixture: ComponentFixture<MyComp3268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
