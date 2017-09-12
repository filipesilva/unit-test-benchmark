import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp408Component } from './my-comp-408.component';

describe('MyComp408Component', () => {
  let component: MyComp408Component;
  let fixture: ComponentFixture<MyComp408Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp408Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
