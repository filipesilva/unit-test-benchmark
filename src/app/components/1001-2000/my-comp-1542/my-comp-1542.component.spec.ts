import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1542Component } from './my-comp-1542.component';

describe('MyComp1542Component', () => {
  let component: MyComp1542Component;
  let fixture: ComponentFixture<MyComp1542Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1542Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
