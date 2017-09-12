import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3661Component } from './my-comp-3661.component';

describe('MyComp3661Component', () => {
  let component: MyComp3661Component;
  let fixture: ComponentFixture<MyComp3661Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3661Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
