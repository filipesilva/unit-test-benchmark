import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7528Component } from './my-comp-7528.component';

describe('MyComp7528Component', () => {
  let component: MyComp7528Component;
  let fixture: ComponentFixture<MyComp7528Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7528Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
