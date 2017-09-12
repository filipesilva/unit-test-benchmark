import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5595Component } from './my-comp-5595.component';

describe('MyComp5595Component', () => {
  let component: MyComp5595Component;
  let fixture: ComponentFixture<MyComp5595Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5595Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
