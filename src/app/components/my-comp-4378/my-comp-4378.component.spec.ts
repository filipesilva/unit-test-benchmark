import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4378Component } from './my-comp-4378.component';

describe('MyComp4378Component', () => {
  let component: MyComp4378Component;
  let fixture: ComponentFixture<MyComp4378Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4378Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
