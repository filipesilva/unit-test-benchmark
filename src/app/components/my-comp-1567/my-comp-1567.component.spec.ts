import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1567Component } from './my-comp-1567.component';

describe('MyComp1567Component', () => {
  let component: MyComp1567Component;
  let fixture: ComponentFixture<MyComp1567Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1567Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
