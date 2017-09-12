import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9932Component } from './my-comp-9932.component';

describe('MyComp9932Component', () => {
  let component: MyComp9932Component;
  let fixture: ComponentFixture<MyComp9932Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9932Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
