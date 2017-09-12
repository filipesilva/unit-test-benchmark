import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9324Component } from './my-comp-9324.component';

describe('MyComp9324Component', () => {
  let component: MyComp9324Component;
  let fixture: ComponentFixture<MyComp9324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
