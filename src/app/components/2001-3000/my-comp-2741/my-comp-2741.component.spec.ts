import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2741Component } from './my-comp-2741.component';

describe('MyComp2741Component', () => {
  let component: MyComp2741Component;
  let fixture: ComponentFixture<MyComp2741Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2741Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
