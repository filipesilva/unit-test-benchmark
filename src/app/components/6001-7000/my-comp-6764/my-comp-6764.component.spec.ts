import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6764Component } from './my-comp-6764.component';

describe('MyComp6764Component', () => {
  let component: MyComp6764Component;
  let fixture: ComponentFixture<MyComp6764Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6764Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
