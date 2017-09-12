import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp709Component } from './my-comp-709.component';

describe('MyComp709Component', () => {
  let component: MyComp709Component;
  let fixture: ComponentFixture<MyComp709Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp709Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
