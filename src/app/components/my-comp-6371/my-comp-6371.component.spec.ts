import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6371Component } from './my-comp-6371.component';

describe('MyComp6371Component', () => {
  let component: MyComp6371Component;
  let fixture: ComponentFixture<MyComp6371Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6371Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
