import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6012Component } from './my-comp-6012.component';

describe('MyComp6012Component', () => {
  let component: MyComp6012Component;
  let fixture: ComponentFixture<MyComp6012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
