import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9081Component } from './my-comp-9081.component';

describe('MyComp9081Component', () => {
  let component: MyComp9081Component;
  let fixture: ComponentFixture<MyComp9081Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9081Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
