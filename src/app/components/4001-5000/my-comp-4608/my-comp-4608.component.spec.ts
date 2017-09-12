import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4608Component } from './my-comp-4608.component';

describe('MyComp4608Component', () => {
  let component: MyComp4608Component;
  let fixture: ComponentFixture<MyComp4608Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4608Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
