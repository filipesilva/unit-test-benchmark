import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9812Component } from './my-comp-9812.component';

describe('MyComp9812Component', () => {
  let component: MyComp9812Component;
  let fixture: ComponentFixture<MyComp9812Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9812Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
