import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6384Component } from './my-comp-6384.component';

describe('MyComp6384Component', () => {
  let component: MyComp6384Component;
  let fixture: ComponentFixture<MyComp6384Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6384Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
