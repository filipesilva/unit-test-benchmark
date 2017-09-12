import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp762Component } from './my-comp-762.component';

describe('MyComp762Component', () => {
  let component: MyComp762Component;
  let fixture: ComponentFixture<MyComp762Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp762Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
