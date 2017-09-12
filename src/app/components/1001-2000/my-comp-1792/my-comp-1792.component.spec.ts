import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1792Component } from './my-comp-1792.component';

describe('MyComp1792Component', () => {
  let component: MyComp1792Component;
  let fixture: ComponentFixture<MyComp1792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1792Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
