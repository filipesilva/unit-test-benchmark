import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5824Component } from './my-comp-5824.component';

describe('MyComp5824Component', () => {
  let component: MyComp5824Component;
  let fixture: ComponentFixture<MyComp5824Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5824Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
