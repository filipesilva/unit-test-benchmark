import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1166Component } from './my-comp-1166.component';

describe('MyComp1166Component', () => {
  let component: MyComp1166Component;
  let fixture: ComponentFixture<MyComp1166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
