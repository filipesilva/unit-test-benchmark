import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp877Component } from './my-comp-877.component';

describe('MyComp877Component', () => {
  let component: MyComp877Component;
  let fixture: ComponentFixture<MyComp877Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp877Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
