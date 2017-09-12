import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9149Component } from './my-comp-9149.component';

describe('MyComp9149Component', () => {
  let component: MyComp9149Component;
  let fixture: ComponentFixture<MyComp9149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
