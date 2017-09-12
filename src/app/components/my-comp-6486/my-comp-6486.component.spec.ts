import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6486Component } from './my-comp-6486.component';

describe('MyComp6486Component', () => {
  let component: MyComp6486Component;
  let fixture: ComponentFixture<MyComp6486Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6486Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
