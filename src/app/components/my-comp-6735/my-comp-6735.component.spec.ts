import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6735Component } from './my-comp-6735.component';

describe('MyComp6735Component', () => {
  let component: MyComp6735Component;
  let fixture: ComponentFixture<MyComp6735Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6735Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
