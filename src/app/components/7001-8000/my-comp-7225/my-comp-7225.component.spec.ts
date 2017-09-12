import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7225Component } from './my-comp-7225.component';

describe('MyComp7225Component', () => {
  let component: MyComp7225Component;
  let fixture: ComponentFixture<MyComp7225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
