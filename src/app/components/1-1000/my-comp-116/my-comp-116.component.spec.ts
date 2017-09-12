import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp116Component } from './my-comp-116.component';

describe('MyComp116Component', () => {
  let component: MyComp116Component;
  let fixture: ComponentFixture<MyComp116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
