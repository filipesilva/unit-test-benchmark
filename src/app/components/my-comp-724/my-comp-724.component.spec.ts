import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp724Component } from './my-comp-724.component';

describe('MyComp724Component', () => {
  let component: MyComp724Component;
  let fixture: ComponentFixture<MyComp724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
