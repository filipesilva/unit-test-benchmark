import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2316Component } from './my-comp-2316.component';

describe('MyComp2316Component', () => {
  let component: MyComp2316Component;
  let fixture: ComponentFixture<MyComp2316Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2316Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
