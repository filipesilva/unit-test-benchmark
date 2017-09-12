import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6297Component } from './my-comp-6297.component';

describe('MyComp6297Component', () => {
  let component: MyComp6297Component;
  let fixture: ComponentFixture<MyComp6297Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6297Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
