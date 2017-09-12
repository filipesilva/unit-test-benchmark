import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2274Component } from './my-comp-2274.component';

describe('MyComp2274Component', () => {
  let component: MyComp2274Component;
  let fixture: ComponentFixture<MyComp2274Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2274Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
