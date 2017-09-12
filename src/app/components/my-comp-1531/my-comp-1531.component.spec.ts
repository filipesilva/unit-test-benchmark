import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1531Component } from './my-comp-1531.component';

describe('MyComp1531Component', () => {
  let component: MyComp1531Component;
  let fixture: ComponentFixture<MyComp1531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
