import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7305Component } from './my-comp-7305.component';

describe('MyComp7305Component', () => {
  let component: MyComp7305Component;
  let fixture: ComponentFixture<MyComp7305Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7305Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
