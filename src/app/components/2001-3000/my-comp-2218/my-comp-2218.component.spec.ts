import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2218Component } from './my-comp-2218.component';

describe('MyComp2218Component', () => {
  let component: MyComp2218Component;
  let fixture: ComponentFixture<MyComp2218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
