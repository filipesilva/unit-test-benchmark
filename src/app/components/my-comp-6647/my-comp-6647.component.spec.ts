import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6647Component } from './my-comp-6647.component';

describe('MyComp6647Component', () => {
  let component: MyComp6647Component;
  let fixture: ComponentFixture<MyComp6647Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6647Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
