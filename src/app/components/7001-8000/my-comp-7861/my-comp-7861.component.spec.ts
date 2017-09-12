import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7861Component } from './my-comp-7861.component';

describe('MyComp7861Component', () => {
  let component: MyComp7861Component;
  let fixture: ComponentFixture<MyComp7861Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7861Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
