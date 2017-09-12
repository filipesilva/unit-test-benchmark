import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6462Component } from './my-comp-6462.component';

describe('MyComp6462Component', () => {
  let component: MyComp6462Component;
  let fixture: ComponentFixture<MyComp6462Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6462Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
