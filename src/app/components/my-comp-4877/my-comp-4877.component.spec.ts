import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4877Component } from './my-comp-4877.component';

describe('MyComp4877Component', () => {
  let component: MyComp4877Component;
  let fixture: ComponentFixture<MyComp4877Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4877Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
