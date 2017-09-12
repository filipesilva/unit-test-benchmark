import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6051Component } from './my-comp-6051.component';

describe('MyComp6051Component', () => {
  let component: MyComp6051Component;
  let fixture: ComponentFixture<MyComp6051Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6051Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
