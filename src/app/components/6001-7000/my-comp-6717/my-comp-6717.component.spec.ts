import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6717Component } from './my-comp-6717.component';

describe('MyComp6717Component', () => {
  let component: MyComp6717Component;
  let fixture: ComponentFixture<MyComp6717Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6717Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
