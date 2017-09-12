import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3457Component } from './my-comp-3457.component';

describe('MyComp3457Component', () => {
  let component: MyComp3457Component;
  let fixture: ComponentFixture<MyComp3457Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3457Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
