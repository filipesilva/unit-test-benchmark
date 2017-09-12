import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2243Component } from './my-comp-2243.component';

describe('MyComp2243Component', () => {
  let component: MyComp2243Component;
  let fixture: ComponentFixture<MyComp2243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
