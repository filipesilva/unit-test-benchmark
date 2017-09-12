import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3775Component } from './my-comp-3775.component';

describe('MyComp3775Component', () => {
  let component: MyComp3775Component;
  let fixture: ComponentFixture<MyComp3775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3775Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
