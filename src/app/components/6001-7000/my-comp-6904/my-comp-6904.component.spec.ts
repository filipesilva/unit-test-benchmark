import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6904Component } from './my-comp-6904.component';

describe('MyComp6904Component', () => {
  let component: MyComp6904Component;
  let fixture: ComponentFixture<MyComp6904Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6904Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
