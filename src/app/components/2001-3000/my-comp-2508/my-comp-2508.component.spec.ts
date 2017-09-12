import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2508Component } from './my-comp-2508.component';

describe('MyComp2508Component', () => {
  let component: MyComp2508Component;
  let fixture: ComponentFixture<MyComp2508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2508Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
