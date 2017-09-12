import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1294Component } from './my-comp-1294.component';

describe('MyComp1294Component', () => {
  let component: MyComp1294Component;
  let fixture: ComponentFixture<MyComp1294Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1294Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
