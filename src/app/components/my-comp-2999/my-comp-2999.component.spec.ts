import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2999Component } from './my-comp-2999.component';

describe('MyComp2999Component', () => {
  let component: MyComp2999Component;
  let fixture: ComponentFixture<MyComp2999Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2999Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
