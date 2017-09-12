import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4932Component } from './my-comp-4932.component';

describe('MyComp4932Component', () => {
  let component: MyComp4932Component;
  let fixture: ComponentFixture<MyComp4932Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4932Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
