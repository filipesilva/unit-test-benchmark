import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2066Component } from './my-comp-2066.component';

describe('MyComp2066Component', () => {
  let component: MyComp2066Component;
  let fixture: ComponentFixture<MyComp2066Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2066Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2066Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
