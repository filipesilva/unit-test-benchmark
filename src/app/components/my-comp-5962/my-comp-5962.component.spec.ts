import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5962Component } from './my-comp-5962.component';

describe('MyComp5962Component', () => {
  let component: MyComp5962Component;
  let fixture: ComponentFixture<MyComp5962Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5962Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
