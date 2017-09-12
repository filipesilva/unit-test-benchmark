import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7539Component } from './my-comp-7539.component';

describe('MyComp7539Component', () => {
  let component: MyComp7539Component;
  let fixture: ComponentFixture<MyComp7539Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7539Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
