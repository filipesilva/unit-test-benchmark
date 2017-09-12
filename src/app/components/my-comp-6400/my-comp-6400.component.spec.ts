import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6400Component } from './my-comp-6400.component';

describe('MyComp6400Component', () => {
  let component: MyComp6400Component;
  let fixture: ComponentFixture<MyComp6400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
