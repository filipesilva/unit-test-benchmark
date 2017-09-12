import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1392Component } from './my-comp-1392.component';

describe('MyComp1392Component', () => {
  let component: MyComp1392Component;
  let fixture: ComponentFixture<MyComp1392Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1392Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
