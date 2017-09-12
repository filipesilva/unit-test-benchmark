import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6171Component } from './my-comp-6171.component';

describe('MyComp6171Component', () => {
  let component: MyComp6171Component;
  let fixture: ComponentFixture<MyComp6171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
