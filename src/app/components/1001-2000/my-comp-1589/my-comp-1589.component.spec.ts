import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1589Component } from './my-comp-1589.component';

describe('MyComp1589Component', () => {
  let component: MyComp1589Component;
  let fixture: ComponentFixture<MyComp1589Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1589Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
