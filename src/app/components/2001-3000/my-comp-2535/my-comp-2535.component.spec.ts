import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2535Component } from './my-comp-2535.component';

describe('MyComp2535Component', () => {
  let component: MyComp2535Component;
  let fixture: ComponentFixture<MyComp2535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2535Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
