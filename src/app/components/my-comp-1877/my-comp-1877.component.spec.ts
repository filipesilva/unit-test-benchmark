import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1877Component } from './my-comp-1877.component';

describe('MyComp1877Component', () => {
  let component: MyComp1877Component;
  let fixture: ComponentFixture<MyComp1877Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1877Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
