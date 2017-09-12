import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4473Component } from './my-comp-4473.component';

describe('MyComp4473Component', () => {
  let component: MyComp4473Component;
  let fixture: ComponentFixture<MyComp4473Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4473Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
