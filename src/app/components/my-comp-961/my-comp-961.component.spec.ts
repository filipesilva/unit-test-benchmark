import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp961Component } from './my-comp-961.component';

describe('MyComp961Component', () => {
  let component: MyComp961Component;
  let fixture: ComponentFixture<MyComp961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp961Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
