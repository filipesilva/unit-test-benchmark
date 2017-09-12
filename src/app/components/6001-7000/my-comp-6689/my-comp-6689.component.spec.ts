import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6689Component } from './my-comp-6689.component';

describe('MyComp6689Component', () => {
  let component: MyComp6689Component;
  let fixture: ComponentFixture<MyComp6689Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6689Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
