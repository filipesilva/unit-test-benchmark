import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5177Component } from './my-comp-5177.component';

describe('MyComp5177Component', () => {
  let component: MyComp5177Component;
  let fixture: ComponentFixture<MyComp5177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
