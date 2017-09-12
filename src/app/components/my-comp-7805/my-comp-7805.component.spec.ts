import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7805Component } from './my-comp-7805.component';

describe('MyComp7805Component', () => {
  let component: MyComp7805Component;
  let fixture: ComponentFixture<MyComp7805Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7805Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
