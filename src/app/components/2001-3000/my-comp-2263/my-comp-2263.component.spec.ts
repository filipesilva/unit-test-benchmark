import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2263Component } from './my-comp-2263.component';

describe('MyComp2263Component', () => {
  let component: MyComp2263Component;
  let fixture: ComponentFixture<MyComp2263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
