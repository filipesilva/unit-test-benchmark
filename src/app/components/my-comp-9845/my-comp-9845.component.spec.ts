import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9845Component } from './my-comp-9845.component';

describe('MyComp9845Component', () => {
  let component: MyComp9845Component;
  let fixture: ComponentFixture<MyComp9845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9845Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
