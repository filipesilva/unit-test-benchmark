import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9596Component } from './my-comp-9596.component';

describe('MyComp9596Component', () => {
  let component: MyComp9596Component;
  let fixture: ComponentFixture<MyComp9596Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9596Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
