import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6572Component } from './my-comp-6572.component';

describe('MyComp6572Component', () => {
  let component: MyComp6572Component;
  let fixture: ComponentFixture<MyComp6572Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6572Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
