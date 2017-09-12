import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3543Component } from './my-comp-3543.component';

describe('MyComp3543Component', () => {
  let component: MyComp3543Component;
  let fixture: ComponentFixture<MyComp3543Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3543Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
