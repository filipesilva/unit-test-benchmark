import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3822Component } from './my-comp-3822.component';

describe('MyComp3822Component', () => {
  let component: MyComp3822Component;
  let fixture: ComponentFixture<MyComp3822Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3822Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
