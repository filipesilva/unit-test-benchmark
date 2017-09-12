import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7331Component } from './my-comp-7331.component';

describe('MyComp7331Component', () => {
  let component: MyComp7331Component;
  let fixture: ComponentFixture<MyComp7331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
