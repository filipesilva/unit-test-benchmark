import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9316Component } from './my-comp-9316.component';

describe('MyComp9316Component', () => {
  let component: MyComp9316Component;
  let fixture: ComponentFixture<MyComp9316Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9316Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
