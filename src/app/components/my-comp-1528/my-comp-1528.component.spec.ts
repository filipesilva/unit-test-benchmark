import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1528Component } from './my-comp-1528.component';

describe('MyComp1528Component', () => {
  let component: MyComp1528Component;
  let fixture: ComponentFixture<MyComp1528Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1528Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
