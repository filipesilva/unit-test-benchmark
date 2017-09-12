import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1104Component } from './my-comp-1104.component';

describe('MyComp1104Component', () => {
  let component: MyComp1104Component;
  let fixture: ComponentFixture<MyComp1104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
