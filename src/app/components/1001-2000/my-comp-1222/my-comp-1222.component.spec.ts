import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1222Component } from './my-comp-1222.component';

describe('MyComp1222Component', () => {
  let component: MyComp1222Component;
  let fixture: ComponentFixture<MyComp1222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
