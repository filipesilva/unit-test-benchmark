import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp704Component } from './my-comp-704.component';

describe('MyComp704Component', () => {
  let component: MyComp704Component;
  let fixture: ComponentFixture<MyComp704Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp704Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
