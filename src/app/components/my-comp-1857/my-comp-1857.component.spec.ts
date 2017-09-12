import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1857Component } from './my-comp-1857.component';

describe('MyComp1857Component', () => {
  let component: MyComp1857Component;
  let fixture: ComponentFixture<MyComp1857Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1857Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
