import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6853Component } from './my-comp-6853.component';

describe('MyComp6853Component', () => {
  let component: MyComp6853Component;
  let fixture: ComponentFixture<MyComp6853Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6853Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
