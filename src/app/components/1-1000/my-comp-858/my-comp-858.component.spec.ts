import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp858Component } from './my-comp-858.component';

describe('MyComp858Component', () => {
  let component: MyComp858Component;
  let fixture: ComponentFixture<MyComp858Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp858Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
