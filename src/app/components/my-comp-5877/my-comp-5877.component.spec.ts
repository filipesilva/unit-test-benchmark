import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5877Component } from './my-comp-5877.component';

describe('MyComp5877Component', () => {
  let component: MyComp5877Component;
  let fixture: ComponentFixture<MyComp5877Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5877Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
