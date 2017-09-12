import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2108Component } from './my-comp-2108.component';

describe('MyComp2108Component', () => {
  let component: MyComp2108Component;
  let fixture: ComponentFixture<MyComp2108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
