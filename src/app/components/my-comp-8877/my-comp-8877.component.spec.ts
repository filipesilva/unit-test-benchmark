import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8877Component } from './my-comp-8877.component';

describe('MyComp8877Component', () => {
  let component: MyComp8877Component;
  let fixture: ComponentFixture<MyComp8877Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8877Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
