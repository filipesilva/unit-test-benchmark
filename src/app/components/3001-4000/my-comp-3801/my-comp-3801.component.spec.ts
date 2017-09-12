import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3801Component } from './my-comp-3801.component';

describe('MyComp3801Component', () => {
  let component: MyComp3801Component;
  let fixture: ComponentFixture<MyComp3801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
