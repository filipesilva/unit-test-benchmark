import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4031Component } from './my-comp-4031.component';

describe('MyComp4031Component', () => {
  let component: MyComp4031Component;
  let fixture: ComponentFixture<MyComp4031Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4031Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
