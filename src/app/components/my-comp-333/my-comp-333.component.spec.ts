import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp333Component } from './my-comp-333.component';

describe('MyComp333Component', () => {
  let component: MyComp333Component;
  let fixture: ComponentFixture<MyComp333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
