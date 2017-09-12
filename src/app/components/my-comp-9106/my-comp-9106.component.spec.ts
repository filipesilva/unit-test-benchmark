import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9106Component } from './my-comp-9106.component';

describe('MyComp9106Component', () => {
  let component: MyComp9106Component;
  let fixture: ComponentFixture<MyComp9106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
