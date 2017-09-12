import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1200Component } from './my-comp-1200.component';

describe('MyComp1200Component', () => {
  let component: MyComp1200Component;
  let fixture: ComponentFixture<MyComp1200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
