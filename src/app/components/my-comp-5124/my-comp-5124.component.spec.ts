import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5124Component } from './my-comp-5124.component';

describe('MyComp5124Component', () => {
  let component: MyComp5124Component;
  let fixture: ComponentFixture<MyComp5124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
