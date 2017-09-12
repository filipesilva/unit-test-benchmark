import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3693Component } from './my-comp-3693.component';

describe('MyComp3693Component', () => {
  let component: MyComp3693Component;
  let fixture: ComponentFixture<MyComp3693Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3693Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
