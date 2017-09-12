import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1202Component } from './my-comp-1202.component';

describe('MyComp1202Component', () => {
  let component: MyComp1202Component;
  let fixture: ComponentFixture<MyComp1202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
