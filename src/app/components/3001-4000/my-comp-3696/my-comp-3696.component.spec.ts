import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3696Component } from './my-comp-3696.component';

describe('MyComp3696Component', () => {
  let component: MyComp3696Component;
  let fixture: ComponentFixture<MyComp3696Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3696Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
