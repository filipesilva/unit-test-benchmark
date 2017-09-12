import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp876Component } from './my-comp-876.component';

describe('MyComp876Component', () => {
  let component: MyComp876Component;
  let fixture: ComponentFixture<MyComp876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
