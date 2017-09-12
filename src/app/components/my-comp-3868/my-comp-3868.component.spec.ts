import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3868Component } from './my-comp-3868.component';

describe('MyComp3868Component', () => {
  let component: MyComp3868Component;
  let fixture: ComponentFixture<MyComp3868Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3868Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
