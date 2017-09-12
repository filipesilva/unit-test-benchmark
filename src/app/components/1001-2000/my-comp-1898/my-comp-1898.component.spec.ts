import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1898Component } from './my-comp-1898.component';

describe('MyComp1898Component', () => {
  let component: MyComp1898Component;
  let fixture: ComponentFixture<MyComp1898Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1898Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
