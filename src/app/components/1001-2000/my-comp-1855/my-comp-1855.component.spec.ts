import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1855Component } from './my-comp-1855.component';

describe('MyComp1855Component', () => {
  let component: MyComp1855Component;
  let fixture: ComponentFixture<MyComp1855Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1855Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
