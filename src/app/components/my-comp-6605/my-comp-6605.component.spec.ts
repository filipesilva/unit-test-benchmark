import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6605Component } from './my-comp-6605.component';

describe('MyComp6605Component', () => {
  let component: MyComp6605Component;
  let fixture: ComponentFixture<MyComp6605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6605Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
