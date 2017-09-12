import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7877Component } from './my-comp-7877.component';

describe('MyComp7877Component', () => {
  let component: MyComp7877Component;
  let fixture: ComponentFixture<MyComp7877Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7877Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
