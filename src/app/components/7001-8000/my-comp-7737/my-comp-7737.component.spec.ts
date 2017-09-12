import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7737Component } from './my-comp-7737.component';

describe('MyComp7737Component', () => {
  let component: MyComp7737Component;
  let fixture: ComponentFixture<MyComp7737Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7737Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
