import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9280Component } from './my-comp-9280.component';

describe('MyComp9280Component', () => {
  let component: MyComp9280Component;
  let fixture: ComponentFixture<MyComp9280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
