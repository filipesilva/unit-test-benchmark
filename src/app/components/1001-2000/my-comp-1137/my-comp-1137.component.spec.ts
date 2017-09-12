import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1137Component } from './my-comp-1137.component';

describe('MyComp1137Component', () => {
  let component: MyComp1137Component;
  let fixture: ComponentFixture<MyComp1137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1137Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
