import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1725Component } from './my-comp-1725.component';

describe('MyComp1725Component', () => {
  let component: MyComp1725Component;
  let fixture: ComponentFixture<MyComp1725Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1725Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
