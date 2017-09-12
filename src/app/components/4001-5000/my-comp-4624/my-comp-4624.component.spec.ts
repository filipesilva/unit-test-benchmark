import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4624Component } from './my-comp-4624.component';

describe('MyComp4624Component', () => {
  let component: MyComp4624Component;
  let fixture: ComponentFixture<MyComp4624Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4624Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
