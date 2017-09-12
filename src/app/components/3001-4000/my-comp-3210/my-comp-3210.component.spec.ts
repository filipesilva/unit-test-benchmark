import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3210Component } from './my-comp-3210.component';

describe('MyComp3210Component', () => {
  let component: MyComp3210Component;
  let fixture: ComponentFixture<MyComp3210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
