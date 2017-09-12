import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9592Component } from './my-comp-9592.component';

describe('MyComp9592Component', () => {
  let component: MyComp9592Component;
  let fixture: ComponentFixture<MyComp9592Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9592Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
