import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp371Component } from './my-comp-371.component';

describe('MyComp371Component', () => {
  let component: MyComp371Component;
  let fixture: ComponentFixture<MyComp371Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp371Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
