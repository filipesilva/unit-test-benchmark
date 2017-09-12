import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4057Component } from './my-comp-4057.component';

describe('MyComp4057Component', () => {
  let component: MyComp4057Component;
  let fixture: ComponentFixture<MyComp4057Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4057Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4057Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
