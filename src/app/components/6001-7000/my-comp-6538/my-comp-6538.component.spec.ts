import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6538Component } from './my-comp-6538.component';

describe('MyComp6538Component', () => {
  let component: MyComp6538Component;
  let fixture: ComponentFixture<MyComp6538Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6538Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
