import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1761Component } from './my-comp-1761.component';

describe('MyComp1761Component', () => {
  let component: MyComp1761Component;
  let fixture: ComponentFixture<MyComp1761Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1761Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
