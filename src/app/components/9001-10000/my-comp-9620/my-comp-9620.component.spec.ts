import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9620Component } from './my-comp-9620.component';

describe('MyComp9620Component', () => {
  let component: MyComp9620Component;
  let fixture: ComponentFixture<MyComp9620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9620Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
