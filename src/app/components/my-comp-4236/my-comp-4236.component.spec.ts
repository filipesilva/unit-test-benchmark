import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4236Component } from './my-comp-4236.component';

describe('MyComp4236Component', () => {
  let component: MyComp4236Component;
  let fixture: ComponentFixture<MyComp4236Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4236Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
