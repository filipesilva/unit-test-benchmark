import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6318Component } from './my-comp-6318.component';

describe('MyComp6318Component', () => {
  let component: MyComp6318Component;
  let fixture: ComponentFixture<MyComp6318Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6318Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
