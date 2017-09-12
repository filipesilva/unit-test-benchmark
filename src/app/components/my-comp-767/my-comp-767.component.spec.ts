import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp767Component } from './my-comp-767.component';

describe('MyComp767Component', () => {
  let component: MyComp767Component;
  let fixture: ComponentFixture<MyComp767Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp767Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
