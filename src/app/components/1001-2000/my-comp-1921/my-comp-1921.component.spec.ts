import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1921Component } from './my-comp-1921.component';

describe('MyComp1921Component', () => {
  let component: MyComp1921Component;
  let fixture: ComponentFixture<MyComp1921Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1921Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
