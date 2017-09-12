import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp609Component } from './my-comp-609.component';

describe('MyComp609Component', () => {
  let component: MyComp609Component;
  let fixture: ComponentFixture<MyComp609Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp609Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
