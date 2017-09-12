import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1380Component } from './my-comp-1380.component';

describe('MyComp1380Component', () => {
  let component: MyComp1380Component;
  let fixture: ComponentFixture<MyComp1380Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1380Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
