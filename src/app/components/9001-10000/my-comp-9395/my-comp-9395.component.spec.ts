import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9395Component } from './my-comp-9395.component';

describe('MyComp9395Component', () => {
  let component: MyComp9395Component;
  let fixture: ComponentFixture<MyComp9395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9395Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
