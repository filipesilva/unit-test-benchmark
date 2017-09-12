import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1819Component } from './my-comp-1819.component';

describe('MyComp1819Component', () => {
  let component: MyComp1819Component;
  let fixture: ComponentFixture<MyComp1819Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1819Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
