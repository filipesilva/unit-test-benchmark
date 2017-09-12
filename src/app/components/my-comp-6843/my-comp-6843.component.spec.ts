import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6843Component } from './my-comp-6843.component';

describe('MyComp6843Component', () => {
  let component: MyComp6843Component;
  let fixture: ComponentFixture<MyComp6843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6843Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
