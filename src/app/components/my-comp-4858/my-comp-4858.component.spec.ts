import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4858Component } from './my-comp-4858.component';

describe('MyComp4858Component', () => {
  let component: MyComp4858Component;
  let fixture: ComponentFixture<MyComp4858Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4858Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
