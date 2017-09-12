import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1286Component } from './my-comp-1286.component';

describe('MyComp1286Component', () => {
  let component: MyComp1286Component;
  let fixture: ComponentFixture<MyComp1286Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1286Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
