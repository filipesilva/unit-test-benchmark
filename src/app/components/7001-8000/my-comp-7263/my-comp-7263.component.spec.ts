import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7263Component } from './my-comp-7263.component';

describe('MyComp7263Component', () => {
  let component: MyComp7263Component;
  let fixture: ComponentFixture<MyComp7263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
