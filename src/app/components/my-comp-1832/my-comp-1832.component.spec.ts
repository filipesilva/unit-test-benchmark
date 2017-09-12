import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1832Component } from './my-comp-1832.component';

describe('MyComp1832Component', () => {
  let component: MyComp1832Component;
  let fixture: ComponentFixture<MyComp1832Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1832Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
