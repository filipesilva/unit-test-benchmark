import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp999Component } from './my-comp-999.component';

describe('MyComp999Component', () => {
  let component: MyComp999Component;
  let fixture: ComponentFixture<MyComp999Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp999Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
