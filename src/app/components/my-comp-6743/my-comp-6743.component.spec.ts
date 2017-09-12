import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6743Component } from './my-comp-6743.component';

describe('MyComp6743Component', () => {
  let component: MyComp6743Component;
  let fixture: ComponentFixture<MyComp6743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6743Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
