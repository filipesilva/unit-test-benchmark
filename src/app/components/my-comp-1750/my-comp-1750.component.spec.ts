import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1750Component } from './my-comp-1750.component';

describe('MyComp1750Component', () => {
  let component: MyComp1750Component;
  let fixture: ComponentFixture<MyComp1750Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1750Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
