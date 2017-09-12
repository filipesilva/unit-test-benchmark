import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3678Component } from './my-comp-3678.component';

describe('MyComp3678Component', () => {
  let component: MyComp3678Component;
  let fixture: ComponentFixture<MyComp3678Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3678Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
