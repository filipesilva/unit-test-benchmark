import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7756Component } from './my-comp-7756.component';

describe('MyComp7756Component', () => {
  let component: MyComp7756Component;
  let fixture: ComponentFixture<MyComp7756Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7756Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
