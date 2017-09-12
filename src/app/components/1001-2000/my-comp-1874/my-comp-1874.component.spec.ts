import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1874Component } from './my-comp-1874.component';

describe('MyComp1874Component', () => {
  let component: MyComp1874Component;
  let fixture: ComponentFixture<MyComp1874Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1874Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
