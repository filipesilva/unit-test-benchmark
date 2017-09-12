import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9083Component } from './my-comp-9083.component';

describe('MyComp9083Component', () => {
  let component: MyComp9083Component;
  let fixture: ComponentFixture<MyComp9083Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9083Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9083Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
