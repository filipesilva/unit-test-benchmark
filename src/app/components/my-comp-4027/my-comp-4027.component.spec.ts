import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4027Component } from './my-comp-4027.component';

describe('MyComp4027Component', () => {
  let component: MyComp4027Component;
  let fixture: ComponentFixture<MyComp4027Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4027Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4027Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
