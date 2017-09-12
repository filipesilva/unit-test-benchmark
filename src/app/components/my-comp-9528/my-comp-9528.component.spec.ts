import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9528Component } from './my-comp-9528.component';

describe('MyComp9528Component', () => {
  let component: MyComp9528Component;
  let fixture: ComponentFixture<MyComp9528Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9528Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
