import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1038Component } from './my-comp-1038.component';

describe('MyComp1038Component', () => {
  let component: MyComp1038Component;
  let fixture: ComponentFixture<MyComp1038Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1038Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1038Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
