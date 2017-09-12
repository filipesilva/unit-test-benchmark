import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6729Component } from './my-comp-6729.component';

describe('MyComp6729Component', () => {
  let component: MyComp6729Component;
  let fixture: ComponentFixture<MyComp6729Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6729Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
