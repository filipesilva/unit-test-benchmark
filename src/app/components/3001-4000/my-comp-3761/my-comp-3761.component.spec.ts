import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3761Component } from './my-comp-3761.component';

describe('MyComp3761Component', () => {
  let component: MyComp3761Component;
  let fixture: ComponentFixture<MyComp3761Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3761Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
