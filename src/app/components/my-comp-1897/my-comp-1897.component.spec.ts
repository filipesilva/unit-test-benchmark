import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1897Component } from './my-comp-1897.component';

describe('MyComp1897Component', () => {
  let component: MyComp1897Component;
  let fixture: ComponentFixture<MyComp1897Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1897Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
