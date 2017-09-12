import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1440Component } from './my-comp-1440.component';

describe('MyComp1440Component', () => {
  let component: MyComp1440Component;
  let fixture: ComponentFixture<MyComp1440Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1440Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
