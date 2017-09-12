import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9160Component } from './my-comp-9160.component';

describe('MyComp9160Component', () => {
  let component: MyComp9160Component;
  let fixture: ComponentFixture<MyComp9160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9160Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
