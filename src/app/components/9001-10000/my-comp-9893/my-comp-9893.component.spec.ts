import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9893Component } from './my-comp-9893.component';

describe('MyComp9893Component', () => {
  let component: MyComp9893Component;
  let fixture: ComponentFixture<MyComp9893Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9893Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
