import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4822Component } from './my-comp-4822.component';

describe('MyComp4822Component', () => {
  let component: MyComp4822Component;
  let fixture: ComponentFixture<MyComp4822Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4822Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
