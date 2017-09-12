import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6096Component } from './my-comp-6096.component';

describe('MyComp6096Component', () => {
  let component: MyComp6096Component;
  let fixture: ComponentFixture<MyComp6096Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6096Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6096Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
