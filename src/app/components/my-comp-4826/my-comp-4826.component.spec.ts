import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4826Component } from './my-comp-4826.component';

describe('MyComp4826Component', () => {
  let component: MyComp4826Component;
  let fixture: ComponentFixture<MyComp4826Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4826Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
