import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6674Component } from './my-comp-6674.component';

describe('MyComp6674Component', () => {
  let component: MyComp6674Component;
  let fixture: ComponentFixture<MyComp6674Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6674Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
