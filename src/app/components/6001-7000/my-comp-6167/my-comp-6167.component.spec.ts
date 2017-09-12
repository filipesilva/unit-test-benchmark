import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6167Component } from './my-comp-6167.component';

describe('MyComp6167Component', () => {
  let component: MyComp6167Component;
  let fixture: ComponentFixture<MyComp6167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
