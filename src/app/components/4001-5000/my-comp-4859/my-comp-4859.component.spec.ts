import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4859Component } from './my-comp-4859.component';

describe('MyComp4859Component', () => {
  let component: MyComp4859Component;
  let fixture: ComponentFixture<MyComp4859Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4859Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
