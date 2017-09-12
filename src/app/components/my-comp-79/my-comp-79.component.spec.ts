import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp79Component } from './my-comp-79.component';

describe('MyComp79Component', () => {
  let component: MyComp79Component;
  let fixture: ComponentFixture<MyComp79Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp79Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
