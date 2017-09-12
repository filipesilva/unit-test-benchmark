import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp968Component } from './my-comp-968.component';

describe('MyComp968Component', () => {
  let component: MyComp968Component;
  let fixture: ComponentFixture<MyComp968Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp968Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
