import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp612Component } from './my-comp-612.component';

describe('MyComp612Component', () => {
  let component: MyComp612Component;
  let fixture: ComponentFixture<MyComp612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp612Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
