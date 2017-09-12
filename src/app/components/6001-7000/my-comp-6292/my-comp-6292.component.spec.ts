import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6292Component } from './my-comp-6292.component';

describe('MyComp6292Component', () => {
  let component: MyComp6292Component;
  let fixture: ComponentFixture<MyComp6292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
