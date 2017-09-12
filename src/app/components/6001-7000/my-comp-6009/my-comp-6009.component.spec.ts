import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6009Component } from './my-comp-6009.component';

describe('MyComp6009Component', () => {
  let component: MyComp6009Component;
  let fixture: ComponentFixture<MyComp6009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
