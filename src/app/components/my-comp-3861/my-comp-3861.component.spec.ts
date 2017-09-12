import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3861Component } from './my-comp-3861.component';

describe('MyComp3861Component', () => {
  let component: MyComp3861Component;
  let fixture: ComponentFixture<MyComp3861Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3861Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
