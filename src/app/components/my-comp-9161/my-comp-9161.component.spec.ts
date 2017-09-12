import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9161Component } from './my-comp-9161.component';

describe('MyComp9161Component', () => {
  let component: MyComp9161Component;
  let fixture: ComponentFixture<MyComp9161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
