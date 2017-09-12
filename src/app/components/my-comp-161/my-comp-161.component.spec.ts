import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp161Component } from './my-comp-161.component';

describe('MyComp161Component', () => {
  let component: MyComp161Component;
  let fixture: ComponentFixture<MyComp161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
