import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp137Component } from './my-comp-137.component';

describe('MyComp137Component', () => {
  let component: MyComp137Component;
  let fixture: ComponentFixture<MyComp137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp137Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
