import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1127Component } from './my-comp-1127.component';

describe('MyComp1127Component', () => {
  let component: MyComp1127Component;
  let fixture: ComponentFixture<MyComp1127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
