import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4747Component } from './my-comp-4747.component';

describe('MyComp4747Component', () => {
  let component: MyComp4747Component;
  let fixture: ComponentFixture<MyComp4747Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4747Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
