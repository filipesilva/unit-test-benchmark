import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9862Component } from './my-comp-9862.component';

describe('MyComp9862Component', () => {
  let component: MyComp9862Component;
  let fixture: ComponentFixture<MyComp9862Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9862Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
