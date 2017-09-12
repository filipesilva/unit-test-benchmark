import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6335Component } from './my-comp-6335.component';

describe('MyComp6335Component', () => {
  let component: MyComp6335Component;
  let fixture: ComponentFixture<MyComp6335Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6335Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
