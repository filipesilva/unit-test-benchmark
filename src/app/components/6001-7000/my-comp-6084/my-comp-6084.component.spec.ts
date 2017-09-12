import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6084Component } from './my-comp-6084.component';

describe('MyComp6084Component', () => {
  let component: MyComp6084Component;
  let fixture: ComponentFixture<MyComp6084Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6084Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6084Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
