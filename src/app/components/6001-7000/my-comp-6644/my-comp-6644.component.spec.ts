import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6644Component } from './my-comp-6644.component';

describe('MyComp6644Component', () => {
  let component: MyComp6644Component;
  let fixture: ComponentFixture<MyComp6644Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6644Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
