import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3888Component } from './my-comp-3888.component';

describe('MyComp3888Component', () => {
  let component: MyComp3888Component;
  let fixture: ComponentFixture<MyComp3888Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3888Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
