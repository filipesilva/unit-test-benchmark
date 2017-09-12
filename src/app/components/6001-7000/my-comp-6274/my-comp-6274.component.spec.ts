import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6274Component } from './my-comp-6274.component';

describe('MyComp6274Component', () => {
  let component: MyComp6274Component;
  let fixture: ComponentFixture<MyComp6274Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6274Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
