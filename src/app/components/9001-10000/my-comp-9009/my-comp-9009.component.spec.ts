import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9009Component } from './my-comp-9009.component';

describe('MyComp9009Component', () => {
  let component: MyComp9009Component;
  let fixture: ComponentFixture<MyComp9009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
