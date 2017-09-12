import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3565Component } from './my-comp-3565.component';

describe('MyComp3565Component', () => {
  let component: MyComp3565Component;
  let fixture: ComponentFixture<MyComp3565Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3565Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
