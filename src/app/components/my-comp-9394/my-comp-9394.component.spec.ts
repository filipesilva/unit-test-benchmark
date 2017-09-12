import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9394Component } from './my-comp-9394.component';

describe('MyComp9394Component', () => {
  let component: MyComp9394Component;
  let fixture: ComponentFixture<MyComp9394Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9394Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
