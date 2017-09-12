import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4802Component } from './my-comp-4802.component';

describe('MyComp4802Component', () => {
  let component: MyComp4802Component;
  let fixture: ComponentFixture<MyComp4802Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4802Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
