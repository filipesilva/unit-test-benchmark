import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9155Component } from './my-comp-9155.component';

describe('MyComp9155Component', () => {
  let component: MyComp9155Component;
  let fixture: ComponentFixture<MyComp9155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9155Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
