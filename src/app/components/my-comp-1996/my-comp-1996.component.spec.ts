import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1996Component } from './my-comp-1996.component';

describe('MyComp1996Component', () => {
  let component: MyComp1996Component;
  let fixture: ComponentFixture<MyComp1996Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1996Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
