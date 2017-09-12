import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6877Component } from './my-comp-6877.component';

describe('MyComp6877Component', () => {
  let component: MyComp6877Component;
  let fixture: ComponentFixture<MyComp6877Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6877Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
