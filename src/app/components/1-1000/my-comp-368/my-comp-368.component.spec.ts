import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp368Component } from './my-comp-368.component';

describe('MyComp368Component', () => {
  let component: MyComp368Component;
  let fixture: ComponentFixture<MyComp368Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp368Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
