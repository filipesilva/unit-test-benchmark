import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1008Component } from './my-comp-1008.component';

describe('MyComp1008Component', () => {
  let component: MyComp1008Component;
  let fixture: ComponentFixture<MyComp1008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
