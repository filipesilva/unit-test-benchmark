import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3769Component } from './my-comp-3769.component';

describe('MyComp3769Component', () => {
  let component: MyComp3769Component;
  let fixture: ComponentFixture<MyComp3769Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3769Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
