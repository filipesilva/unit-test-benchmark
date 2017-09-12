import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1193Component } from './my-comp-1193.component';

describe('MyComp1193Component', () => {
  let component: MyComp1193Component;
  let fixture: ComponentFixture<MyComp1193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1193Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
