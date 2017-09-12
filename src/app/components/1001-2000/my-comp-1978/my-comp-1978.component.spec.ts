import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1978Component } from './my-comp-1978.component';

describe('MyComp1978Component', () => {
  let component: MyComp1978Component;
  let fixture: ComponentFixture<MyComp1978Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1978Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
