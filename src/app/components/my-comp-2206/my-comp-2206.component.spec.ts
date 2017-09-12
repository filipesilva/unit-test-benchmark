import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2206Component } from './my-comp-2206.component';

describe('MyComp2206Component', () => {
  let component: MyComp2206Component;
  let fixture: ComponentFixture<MyComp2206Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2206Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
