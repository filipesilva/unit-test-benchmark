import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9709Component } from './my-comp-9709.component';

describe('MyComp9709Component', () => {
  let component: MyComp9709Component;
  let fixture: ComponentFixture<MyComp9709Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9709Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
