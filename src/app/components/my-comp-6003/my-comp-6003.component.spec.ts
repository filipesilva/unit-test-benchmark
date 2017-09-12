import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6003Component } from './my-comp-6003.component';

describe('MyComp6003Component', () => {
  let component: MyComp6003Component;
  let fixture: ComponentFixture<MyComp6003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
