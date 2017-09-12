import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4505Component } from './my-comp-4505.component';

describe('MyComp4505Component', () => {
  let component: MyComp4505Component;
  let fixture: ComponentFixture<MyComp4505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4505Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
