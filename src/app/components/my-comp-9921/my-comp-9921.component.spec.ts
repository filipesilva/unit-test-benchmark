import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9921Component } from './my-comp-9921.component';

describe('MyComp9921Component', () => {
  let component: MyComp9921Component;
  let fixture: ComponentFixture<MyComp9921Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9921Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
