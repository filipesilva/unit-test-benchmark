import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6191Component } from './my-comp-6191.component';

describe('MyComp6191Component', () => {
  let component: MyComp6191Component;
  let fixture: ComponentFixture<MyComp6191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
