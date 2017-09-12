import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1285Component } from './my-comp-1285.component';

describe('MyComp1285Component', () => {
  let component: MyComp1285Component;
  let fixture: ComponentFixture<MyComp1285Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1285Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
