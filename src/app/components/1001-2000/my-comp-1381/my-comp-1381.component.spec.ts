import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1381Component } from './my-comp-1381.component';

describe('MyComp1381Component', () => {
  let component: MyComp1381Component;
  let fixture: ComponentFixture<MyComp1381Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1381Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
