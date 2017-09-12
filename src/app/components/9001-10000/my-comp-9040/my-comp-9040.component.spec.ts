import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9040Component } from './my-comp-9040.component';

describe('MyComp9040Component', () => {
  let component: MyComp9040Component;
  let fixture: ComponentFixture<MyComp9040Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9040Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
