import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9572Component } from './my-comp-9572.component';

describe('MyComp9572Component', () => {
  let component: MyComp9572Component;
  let fixture: ComponentFixture<MyComp9572Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9572Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
