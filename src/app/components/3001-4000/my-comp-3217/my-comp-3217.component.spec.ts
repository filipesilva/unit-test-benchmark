import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3217Component } from './my-comp-3217.component';

describe('MyComp3217Component', () => {
  let component: MyComp3217Component;
  let fixture: ComponentFixture<MyComp3217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
