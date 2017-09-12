import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp698Component } from './my-comp-698.component';

describe('MyComp698Component', () => {
  let component: MyComp698Component;
  let fixture: ComponentFixture<MyComp698Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp698Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
