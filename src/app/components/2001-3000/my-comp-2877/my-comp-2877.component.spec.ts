import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2877Component } from './my-comp-2877.component';

describe('MyComp2877Component', () => {
  let component: MyComp2877Component;
  let fixture: ComponentFixture<MyComp2877Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2877Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
