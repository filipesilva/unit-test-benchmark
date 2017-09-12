import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5654Component } from './my-comp-5654.component';

describe('MyComp5654Component', () => {
  let component: MyComp5654Component;
  let fixture: ComponentFixture<MyComp5654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
