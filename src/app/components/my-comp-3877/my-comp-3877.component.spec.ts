import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3877Component } from './my-comp-3877.component';

describe('MyComp3877Component', () => {
  let component: MyComp3877Component;
  let fixture: ComponentFixture<MyComp3877Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3877Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
