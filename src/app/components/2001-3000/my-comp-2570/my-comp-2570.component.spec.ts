import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2570Component } from './my-comp-2570.component';

describe('MyComp2570Component', () => {
  let component: MyComp2570Component;
  let fixture: ComponentFixture<MyComp2570Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2570Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
