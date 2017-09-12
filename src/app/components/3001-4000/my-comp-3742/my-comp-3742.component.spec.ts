import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3742Component } from './my-comp-3742.component';

describe('MyComp3742Component', () => {
  let component: MyComp3742Component;
  let fixture: ComponentFixture<MyComp3742Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3742Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
