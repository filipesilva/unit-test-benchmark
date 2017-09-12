import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1075Component } from './my-comp-1075.component';

describe('MyComp1075Component', () => {
  let component: MyComp1075Component;
  let fixture: ComponentFixture<MyComp1075Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1075Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
