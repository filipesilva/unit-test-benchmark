import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp40Component } from './my-comp-40.component';

describe('MyComp40Component', () => {
  let component: MyComp40Component;
  let fixture: ComponentFixture<MyComp40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp40Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
