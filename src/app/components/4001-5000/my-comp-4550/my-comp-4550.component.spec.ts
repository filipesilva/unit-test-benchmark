import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4550Component } from './my-comp-4550.component';

describe('MyComp4550Component', () => {
  let component: MyComp4550Component;
  let fixture: ComponentFixture<MyComp4550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4550Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
