import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6146Component } from './my-comp-6146.component';

describe('MyComp6146Component', () => {
  let component: MyComp6146Component;
  let fixture: ComponentFixture<MyComp6146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
