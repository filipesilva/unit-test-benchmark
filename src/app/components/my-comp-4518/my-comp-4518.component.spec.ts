import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4518Component } from './my-comp-4518.component';

describe('MyComp4518Component', () => {
  let component: MyComp4518Component;
  let fixture: ComponentFixture<MyComp4518Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4518Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
