import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6085Component } from './my-comp-6085.component';

describe('MyComp6085Component', () => {
  let component: MyComp6085Component;
  let fixture: ComponentFixture<MyComp6085Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6085Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6085Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
