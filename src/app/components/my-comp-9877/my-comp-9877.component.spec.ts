import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9877Component } from './my-comp-9877.component';

describe('MyComp9877Component', () => {
  let component: MyComp9877Component;
  let fixture: ComponentFixture<MyComp9877Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9877Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
