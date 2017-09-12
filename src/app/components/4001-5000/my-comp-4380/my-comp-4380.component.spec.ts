import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4380Component } from './my-comp-4380.component';

describe('MyComp4380Component', () => {
  let component: MyComp4380Component;
  let fixture: ComponentFixture<MyComp4380Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4380Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
