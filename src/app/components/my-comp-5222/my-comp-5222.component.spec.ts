import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5222Component } from './my-comp-5222.component';

describe('MyComp5222Component', () => {
  let component: MyComp5222Component;
  let fixture: ComponentFixture<MyComp5222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
