import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4290Component } from './my-comp-4290.component';

describe('MyComp4290Component', () => {
  let component: MyComp4290Component;
  let fixture: ComponentFixture<MyComp4290Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4290Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
