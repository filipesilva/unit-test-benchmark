import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7858Component } from './my-comp-7858.component';

describe('MyComp7858Component', () => {
  let component: MyComp7858Component;
  let fixture: ComponentFixture<MyComp7858Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7858Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
