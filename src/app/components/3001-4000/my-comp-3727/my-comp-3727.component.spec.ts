import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3727Component } from './my-comp-3727.component';

describe('MyComp3727Component', () => {
  let component: MyComp3727Component;
  let fixture: ComponentFixture<MyComp3727Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3727Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
