import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1216Component } from './my-comp-1216.component';

describe('MyComp1216Component', () => {
  let component: MyComp1216Component;
  let fixture: ComponentFixture<MyComp1216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1216Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
