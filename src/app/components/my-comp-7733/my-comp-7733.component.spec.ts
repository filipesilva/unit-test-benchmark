import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7733Component } from './my-comp-7733.component';

describe('MyComp7733Component', () => {
  let component: MyComp7733Component;
  let fixture: ComponentFixture<MyComp7733Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7733Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
