import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3113Component } from './my-comp-3113.component';

describe('MyComp3113Component', () => {
  let component: MyComp3113Component;
  let fixture: ComponentFixture<MyComp3113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
