import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3718Component } from './my-comp-3718.component';

describe('MyComp3718Component', () => {
  let component: MyComp3718Component;
  let fixture: ComponentFixture<MyComp3718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3718Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
