import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5757Component } from './my-comp-5757.component';

describe('MyComp5757Component', () => {
  let component: MyComp5757Component;
  let fixture: ComponentFixture<MyComp5757Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5757Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
