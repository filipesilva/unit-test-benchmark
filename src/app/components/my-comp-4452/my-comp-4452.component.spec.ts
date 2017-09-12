import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4452Component } from './my-comp-4452.component';

describe('MyComp4452Component', () => {
  let component: MyComp4452Component;
  let fixture: ComponentFixture<MyComp4452Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4452Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
