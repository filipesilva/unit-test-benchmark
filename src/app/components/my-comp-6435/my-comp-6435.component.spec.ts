import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6435Component } from './my-comp-6435.component';

describe('MyComp6435Component', () => {
  let component: MyComp6435Component;
  let fixture: ComponentFixture<MyComp6435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6435Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
