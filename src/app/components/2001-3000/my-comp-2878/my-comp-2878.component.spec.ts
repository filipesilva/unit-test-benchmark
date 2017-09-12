import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2878Component } from './my-comp-2878.component';

describe('MyComp2878Component', () => {
  let component: MyComp2878Component;
  let fixture: ComponentFixture<MyComp2878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2878Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
