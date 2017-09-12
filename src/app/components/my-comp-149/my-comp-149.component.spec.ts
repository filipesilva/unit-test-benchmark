import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp149Component } from './my-comp-149.component';

describe('MyComp149Component', () => {
  let component: MyComp149Component;
  let fixture: ComponentFixture<MyComp149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
