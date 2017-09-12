import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1929Component } from './my-comp-1929.component';

describe('MyComp1929Component', () => {
  let component: MyComp1929Component;
  let fixture: ComponentFixture<MyComp1929Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1929Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
