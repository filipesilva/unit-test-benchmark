import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1201Component } from './my-comp-1201.component';

describe('MyComp1201Component', () => {
  let component: MyComp1201Component;
  let fixture: ComponentFixture<MyComp1201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
