import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2408Component } from './my-comp-2408.component';

describe('MyComp2408Component', () => {
  let component: MyComp2408Component;
  let fixture: ComponentFixture<MyComp2408Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2408Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
