import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7213Component } from './my-comp-7213.component';

describe('MyComp7213Component', () => {
  let component: MyComp7213Component;
  let fixture: ComponentFixture<MyComp7213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
