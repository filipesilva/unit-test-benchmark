import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9311Component } from './my-comp-9311.component';

describe('MyComp9311Component', () => {
  let component: MyComp9311Component;
  let fixture: ComponentFixture<MyComp9311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
