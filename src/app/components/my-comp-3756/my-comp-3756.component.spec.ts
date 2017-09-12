import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3756Component } from './my-comp-3756.component';

describe('MyComp3756Component', () => {
  let component: MyComp3756Component;
  let fixture: ComponentFixture<MyComp3756Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3756Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
