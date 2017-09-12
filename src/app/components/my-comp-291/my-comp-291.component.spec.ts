import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp291Component } from './my-comp-291.component';

describe('MyComp291Component', () => {
  let component: MyComp291Component;
  let fixture: ComponentFixture<MyComp291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
